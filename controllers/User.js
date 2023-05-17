const bcrypt = require('bcryptjs');
const salesforce = require('../salesforce')
const jwt = require('jsonwebtoken');
const status = require('http-status')

const SECRETKEY = 'hehesignedbytarunheheh'

/**
 * Signing up the user
**/
async function signup(req, res) {
    const email = req.body.email;
    const password = req.body.password
    const dob = Date.now().toString()
    const name = req.body.name;
    const phone = req.body.phone;

    const secPass = await bcrypt.hash(password, 10)

    // Check if there is already a user with that email
    result = await salesforce.conn
        .sobject("User__c")
        .select("Id")
        .where({
            Email__c: email
        })

    if (result.length > 0) {
        return res
            .status(status.CONFLICT)
            .send()
    }

    const user = await salesforce.conn.sobject("User__c").create({
        Email__c: email,
        Rewards__c: 0,
        Password__c: secPass,
        Date_of_birth__c: dob,
        Name__c: name,
        Phone_no__c: phone
    }, (err, res) => {
        if (err || !res.success) { return console.error(err, res); }
        return res
    })

    const payload = {
        id: user.id
    }

    const token = jwt.sign(payload, SECRETKEY, { algorithm: 'HS256' })

    await salesforce.conn
        .sobject("User__c")
        .find({
            Id: user.id
        })
        .update({
            Token__c: token
        })

    return res
        .status(status.CREATED)
        .json({ id: user.id, token: token })
}

/**
 * Logging in user
**/
async function loginUser(req, res) {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) return res.status(status.BAD_REQUEST).send()

    const result = await salesforce.conn
        .sobject('User__c')
        .find({
            Email__c: email
        })

    if (!result.length) return res.status(status.NOT_FOUND).send()

    const passwordCompare = await bcrypt.compare(password, String(result[0].Password__c));

    if (passwordCompare) {
        return res
            .status(status.OK)
            .json({
                id: result[0].Id,
                token: result[0].Token__c
            })
    } else {
        return res
            .status(status.UNAUTHORIZED)
            .send()
    }
}

function token(req, res) {
    const token = req.params.token

    try {
        const decoded = jwt.verify(token, SECRETKEY)
        return res
            .status(status.OK)
            .json(decoded)
    } catch (err) {
        return res
            .status(status.UNAUTHORIZED)
            .send()
    }
}

async function getUser(req, res) {
    const id = req.params.id
    const user = await salesforce.conn
        .sobject("User__c")
        .find({
            Id: id
        })

    if (!user.length) return res.status(status.NOT_FOUND).send()

    return res
        .status(status.OK)
        .json(user[0])
}

async function updateUser(req, res) {
    const newDetails = req.body
    try {
        const user = await salesforce.conn
            .sobject("User__c")
            .update({
                Id: newDetails.Id,
                Address_1__c: newDetails.Address_1__c,
                Address_2__c: newDetails.Address_2__c,
                Address_3__c: newDetails.Address_3__c,
                Name__c: newDetails.Name__c,
                Email__c: newDetails.Email__c
            })
    } catch (err) {
        console.log(err)
        return res
            .status(status.BAD_REQUEST)
            .send()
    }

    return res
        .status(status.OK)
        .send()
}


module.exports = {
    signup,
    loginUser,
    token,
    getUser,
    updateUser
}
