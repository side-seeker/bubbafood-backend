const salesforce = require('../salesforce')

//fetch food menu given the brand id
async function getMenu(req, res) {
    const brand_id = req.params.brand_id;
    result = await salesforce.conn.query("SELECT ID, Description__c, Name, Is_Veg__c, Name__c, Price__c, Ratings__c, Speciality__c, Type__c, Image_Url__c From Food_Item__c WHERE Brand__c = '" + brand_id + "' AND Available__c = true");
    return res.json(result.records);
}

//fetch food item for homepage offers
async function getHomeOffers(req, res) {
    try {
      const result = await salesforce.conn.query("SELECT ID, Description__c, Name, Is_Veg__c, Name__c, Price__c, Ratings__c, Speciality__c, Type__c, Image_Url__c FROM Food_Item__c WHERE Available__c = true");
      return res.json(result.records);
    } catch (error) {
      console.error("An error occurred while fetching the menu:", error);
      return res.status(500).json({ error: "An error occurred while fetching the menu." });
    }
  }

//fetch addons for a given food item
async function getAddons(req, res) {
    const food_item_id = req.params.food_item_id;
    result = await salesforce.conn.query("SELECT Secondary_Food_Item__c FROM Addon__c WHERE Primary_Food_Item__c= '" + food_item_id + "'");
    return res.send(result.records);
}

module.exports = {
    getMenu,
    getHomeOffers,
    getAddons
}
