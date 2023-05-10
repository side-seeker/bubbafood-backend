const salesforce = require('../salesforce')

/**
 * fetch food menu given the brand id
**/
async function getMenu(req, res) {
    const brand_id = req.params.brand_id;
    let result = await salesforce.conn.query(`
        SELECT ID, Description__c, Name, Is_Veg__c, Name__c, Price__c, Ratings__c, Speciality__c, Type__c, Image_Url__c, Brand__c
        FROM Food_Item__c
        WHERE Brand__c = '${brand_id}'
        AND Available__c = true
    `);
    return res.json(result.records);
}

/**
 * fetch addons for a given food item
**/
async function getAddons(req, res) {
    const food_item_id = req.params.food_item_id;
    result = await salesforce.conn.query("SELECT Secondary_Food_Item__c FROM Addon__c WHERE Primary_Food_Item__c= '" + food_item_id + "'");
    return res.json(result.records);
}

module.exports = {
    getMenu,
    getAddons
}
