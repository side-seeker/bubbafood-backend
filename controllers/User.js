const bcrypt = require('bcryptjs/dist/bcrypt');
const salesforce = require('../salesforce')

// async function getUsers(req, res) {
//     result = await salesforce.query("SELECT ALL FROM User__c");
//     // result = await salesforce.query("SELECT Email__c, Password__c, Image_Url__c,  Date_of_Birth__c FROM User__c");
//     console.log(result)
//     return res.send(result.records)
// }


//user signup
async function signup(req, res) {
    console.log("Signing up a User")
    const email = req.params.email;
    const password = req.params.password
    const dob= req.params.dob;
    const name= req.params.name;
    const phone= req.params.phone;

    const salt= await bcrypt.genSalt(10);
    const secPass= await bcrypt.hash(password, salt)

    //Check if there is already a user with that email
    result= await salesforce.query("SELECT Email__c, Password__c, Image_Url__c FROM User__c WHERE Email__c= '"+email+"'");
    if(result.totalSize> 0){
        console.log("User already exist");
        //redirect for signup
        return res.redirect('/singup');
    }

    salesforce.sobject('User__c').create({
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
    const email= req.params.email
    const password= req.params.password
    const salt= await bcrypt.genSalt(10);
    const secPass= await bcrypt.hash(password, salt)

    console.log(email);
    result= await salesforce.query("SELECT Email__c, Password__c, Image_Url__c FROM User__c WHERE Email__c= '"+email+"'");
    console.log(result);
    console.log(result.totalSize);
    const passwordCompare= bcrypt.compare(secPass, String(result.Password__C));
    if(passwordCompare){
        console.log("User found")
        console.log(result);
        return res.send(result.records)
    }
    else{
        console.log("User not found")
    }
}

//user logout
async function logoutUser(req, res) {
    return res.redirect('/');
}

//fetch brands
async function getBrands(req, res){
    result= await salesforce.query("SELECT Name, Discription__c, Name__c, Rating__c FROM Brand__c");
    return res.send(result.records);
}

//fetch offers given the brand id
async function getOffers(req, res){
    const brand_id= req.params.brand_id;
    result= await salesforce.query("SELECT Details__c, Name FROM Offers__c WHERE Brand__c= '"+brand_id+"'")
    return res.send(result.records);
}

//fetch food menu given the brand id
async function getFoods(req, res){
    const brand_id= req.params.brand_id;
    result= await salesforce.query("SELECT Description__c, Name, Is_Veg__c, Name__c, Price__c, Ratings__c, Speciality__c, Type__c From Food_Item__c WHERE Brand__c= '"+brand_id+"' AND Available__c= true");
    return res.send(result.records);
}

//fetch addons for a given food item
async function getAddons(req, res){
    const food_item_id= req.params.food_item_id;
    result= await salesforce.query("SELECT Secondary_Food_Item__c FROM Addon__c WHERE Primary_Food_Item__c= '"+food_item_id+"'");
    return res.send(result.records);
}

//fetch restraunt given the brand id
async function getRestraunts(req, res){
    const brand_id= req.params.brand_id;
    result= await salesforce.query("SELECT Name, Address__c, Phone_no__c From Restraunt__c WHERE Brand__c= '"+brand_id+"'");
    return res.send(result.records);
}

//fetch available table details for given capacity
async function getTables(req, res){
    const peoples= req.params.peoples;
    result= await salesforce.query("SELECT Capacity__c, Restraunt__c, Slot_1__c, Slot_2__c, Slot_3__c, Slot_4__c, Name FROM Table__c WHERE Capacity__c>= '"+peoples+"'");
    return res.send(result.records);
}

//Table Reservation
async function reserveTable(req, res){
    const table_id= req.params.table_id;
    const user_id= req.params.user_id;
    const date= req.params.date;
    const slot= req.params.slot;

    salesforce.sobject('Reservation__c').create({
        Date__c: date,
        Slot__c: slot,
        Table__c: table_id,
        User__c: user_id
    }, (err, res) => {
        if (err || !res.success) { return console.error(err, res); }
        console.log("Created record id : " + res.id);
    })
    return res.redirect('/');    
}


//fetch the food item menu for a specific brand;
module.exports = {
    getUsers,
    signup,
    loginUser,
    logoutUser,
    getBrands,
    getFoods,
    getAddons,
    getOffers,
    getTables,
    reserveTable,
    getRestraunts
}