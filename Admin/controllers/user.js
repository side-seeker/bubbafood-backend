const bcrypt = require('bcryptjs');
const salesforce = require('../salesforce')


//restraunt manager signup
async function RMsignup(req, res) {
    console.log("Signing you up")
    const email = req.params.email;
    const password = req.params.password;
    const name = req.params.name;
    const phone = req.params.phone;
    const res_id= req.params.res_id;

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt)

    //Check if there is already a user with that email
    result = await salesforce.conn.query("SELECT Email__c, Password__c FROM Restaurant_Manager__c WHERE Email__c= '" + email + "'");
    if (result.totalSize > 0) {
        console.log("User already exist");
        //redirect for signup
        return res.redirect('/singup');
    }

    salesforce.conn.sobject('Restaurant_Manager__c').create({
        Email__c: email,
        Password__c: secPass,
        Restraunt__c: res_id,
        Name__c: name,
        Phone_no__c: phone
    }, (err, res) => {
        if (err || !res.success) { return console.error(err, res); }
        console.log("Created record id : " + res.id);
    })
    return res.redirect('/');
}

//restraunt manager login
async function RMlogin(req, res) {
    console.log("Checking for the user")
    const email = req.params.email
    const password = req.params.password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt)

    console.log(email);
    result = await salesforce.conn.query("SELECT Email__c, Password__c, Restraunt__c, Name__c FROM Restaurant_Manager__c WHERE Email__c= '" + email + "'");
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

//customer support signup
async function CSsignup(req, res) {
    console.log("Signing you up")
    const email = req.params.email;
    const password = req.params.password;
    const name = req.params.name;
    const phone = req.params.phone;
    const res_id= req.params.res_id;

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt)

    //Check if there is already a user with that email
    result = await salesforce.conn.query("SELECT Email__c, Password__c FROM Customer_Support__c WHERE Email__c= '" + email + "'");
    if (result.totalSize > 0) {
        console.log("User already exist");
        //redirect for signup
        return res.redirect('/singup');
    }

    salesforce.conn.sobject('Customer_Support__c').create({
        Email__c: email,
        Password__c: secPass,
        Restraunt__c: res_id,
        Name__c: name,
        Phone_no__c: phone
    }, (err, res) => {
        if (err || !res.success) { return console.error(err, res); }
        console.log("Created record id : " + res.id);
    })
    return res.redirect('/');
}

//customer support login
async function CSlogin(req, res) {
    console.log("Checking for the user")
    const email = req.params.email
    const password = req.params.password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt)

    console.log(email);
    result = await salesforce.conn.query("SELECT Email__c, Password__c, Restraunt__c, Name__c FROM Customer_Support__c WHERE Email__c= '" + email + "'"); 
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


//fetch the food item menu for a specific brand;
module.exports = {
    RMsignup,
    RMlogin,
    CSsignup,
    CSlogin
}
