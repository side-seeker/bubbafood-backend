const salesforce = require('../salesforce')
async function getSpecificIngredients(req,res)
{
    const brand_id = req.params.brand_id;
    result = await salesforce.conn.query("SELECT Ingredient__c, Ingredient_Id__c,Brand  FROM Ingredients__c WHERE Brand__c= '" + brand_id + "'")
}