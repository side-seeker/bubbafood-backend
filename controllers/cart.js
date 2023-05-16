const salesforce = require('../salesforce')

//add to cart 
async function addToCart(req, res) {
    result = await salesforce.conn.query("SELECT ID, Name, Description__c, Name__c, Rating__c FROM Brand__c");
    return res.json(result.records);
}

module.exports = {
    
}