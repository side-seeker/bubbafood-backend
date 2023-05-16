const salesforce = require('../salesforce')

//fetch brands
async function getBrands(req, res) {
    result = await salesforce.conn.query("SELECT ID, Name, Description__c, Name__c, Rating__c FROM Brand__c");
    return res.json(result.records);
}

//fetch offers given the brand id
async function getOffers(req, res) {
    const brand_id = req.params.brand_id;
    result = await salesforce.conn.query("SELECT Details__c, Name FROM Offers__c WHERE Brand__c= '"+brand_id+"'")
    return res.send(result.records);
}


module.exports = {
    getBrands,
    getOffers
}
