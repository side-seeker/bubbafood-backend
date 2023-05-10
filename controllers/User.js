const bcrypt = require('bcryptjs/dist/bcrypt');
const salesforce = require('../salesforce')

// async function getUsers(req, res) {
//     result = await salesforce.conn.query("SELECT ALL FROM User__c");
//     // result = await salesforce.conn.query("SELECT Email__c, Password__c, Image_Url__c,  Date_of_Birth__c FROM User__c");
//     console.log(result)
//     return res.send(result.records)
// }


//user signup
async function signup(req, res) {
    console.log("Signing up a User")
    const email = req.params.email;
    const password = req.params.password
    const dob = req.params.dob;
    const name = req.params.name;
    const phone = req.params.phone;

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt)

    //Check if there is already a user with that email
    result = await salesforce.conn.query("SELECT Email__c, Password__c, Image_Url__c FROM User__c WHERE Email__c= '" + email + "'");
    if (result.totalSize > 0) {
        console.log("User already exist");
        //redirect for signup
        return res.redirect('/singup');
    }

    salesforce.conn.sobject('User__c').create({
        Email__c: email,
        Password__c: secPass,
        Date_of_birth__c: dob,
        Name__c: name,
        Phone_no__c: phone
    }, (err, res) => {
        if (err || !res.success) { return console.error(err, res); }
        console.log("Created record id : " + res.id);
    })
    return res.redirect('/');
}

//user login
async function loginUser(req, res) {
    console.log("Checking for the user")
    const email = req.params.email
    const password = req.params.password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt)

    console.log(email);
    result = await salesforce.conn.query("SELECT Name__c, Phone_no__c, Rewards__c, Email__c, Password__c, Image_Url__c, , Address_1__c, Address_2__c, Address_3__c FROM User__c WHERE Email__c= '" + email + "'");
    console.log(result);
    console.log(result.totalSize);
    const passwordCompare = bcrypt.compare(secPass, String(result.Password__C));
    if (passwordCompare) {
        console.log("User found")
        console.log(result);
        return res.send(result.records)
    }
    else {
        console.log("User not found")
    }
}

//user logout
async function logoutUser(req, res) {
    return res.redirect('/');
}


//fetch the food item menu for a specific brand;
module.exports = {
    signup,
    loginUser,
    logoutUser,
}
