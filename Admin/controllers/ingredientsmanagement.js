const salesforce = require('../../salesforce')
async function getSpecificIngredients(req,res)
{   
    try{
        const brand_id = req.params.brand_id;
        result = await salesforce.conn.query("SELECT Name, Id, Avaliable__c  FROM Ingredient__c WHERE Brand__c= '" + brand_id + "' ");
        return res.json(result.records);
    }
    catch (error) {
        console.log(error.message);
        // res.status(400).send({ success: false, msg: error.message })
    }
}
async function  createSpecificIngredients(req,res)
{
    try{
        const brand_id = req.params.brand_id;
        const Avaliable = req.params.Avaliable;
        const Ingredient_name= req.params.Ingredient_name;
        salesforce.conn.sobject('Ingredient__c').create({
            Brand__c: brand_id,
            Avaliable__c: Avaliable,
            Name: Ingredient_name
        }, (err, res) => {
            if (err || !res.success) { return console.error(err, res); }
            console.log("Created record id : " + res.id);
        })
        return res.send('Success');
        
    }
    catch(err) {
            console.log(err.message);
    }
    
}
async function updateSpecificIngredients(req,res)
{
    try{
        const ingredient_id = req.params.ingredient_id;
        const Avaliable = req.params.Avaliable;
        salesforce.conn.sobject('Ingredient__c').find({ Id: ingredient_id })
            .update({
                Avaliable__c: Avaliable
            }, function(err, res) {
                if (err || !res.success) { return console.error(err, res); }
                console.log('Updated Successfully : ' + res)
            });
        return res.send('Success');
    } catch (err) {
        console.log(err.message);
    }
}
async function deleteSpecificIngredients(req,res)
{
    try{
        const ingredient_id = req.params.ingredient_id;
        salesforce.conn.sobject("Ingredient__c").destroy(ingredient_id, function(err, ret) {
          if (err || !ret.success) { return console.error(err, res); }
        console.log('Deleted Successfully : ' + res.id);
         });
        }
            
    catch(error){
            console.log(error.message);
            
        }
    }


module.exports = {
    getSpecificIngredients,
    createSpecificIngredients,
    updateSpecificIngredients,
    deleteSpecificIngredients
}