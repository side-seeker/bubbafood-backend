const salesforce = require('../../salesforce')
async function addSpecificfood(req, res) 
{
    try{
        const brand_id= req.params.brand_id;
        const name = req.params.name;
        const description=req.params.description;
        const rating=req.params.rating;
        const avaliable=req.params.avaliable;
        const is_veg=req.params.is_veg;
        const price=req.params.price;
        const speciality=req.params.speciality;
        const type=req.params.type;
        const Image_Url= req.body.Image_Url;
        console.log(Image_Url);
        //const ID=req.params.ID;
        salesforce.conn.sobject('Food_Item__c').create({
            Brand__c: brand_id,
            Name__c:name,
            Description__c:description,
            Ratings__c:rating,
            Available__c:avaliable,
            Is_Veg__c:is_veg,
            Price__c:price,
            Speciality__c:speciality,
            Type__c:type,
            Image_Url__c:Image_Url,
        }, function(err, res) {
            if (err || !res.success) { return console.error(err, res); }
            console.log("Created Successfully : " + res.id);
         });
    }
    catch(error){
        console.log(error.message);
    }
}
async function getSpecificfood(req, res) 
{
    try{
        const brand_id= req.params.brand_id;
        result= await salesforce.conn.query("SELECT Id, Description__c, Is_Veg__c, Name__c, Price__c, Ratings__c, Speciality__c, Type__c, Image_Url__c From Food_Item__c WHERE Brand__c = '"+brand_id+"' ");
        return res.send(result.records);
    }
    catch(error){
        console.log(error.message);
    }
}
async function updateSpecificfood(req, res) 
{
    try{
        const ID=req.params.ID;
        salesforce.conn.sobject('Food_Item__c').find({ Id: ID })
            .update({
                Available__c: true
            }, function (err, res) {
                if (err || !res.success) { return console.error(err, res); }
                console.log('Updated Successfully : ' + res)
            })
            ;
        return res.send('Success');
    }
    catch(error){
        console.log(error.message);

    }
}
async function deleteSpecificfood(req, res) 
{
    try{
        const ID= req.params.ID;
        salesforce.conn.sobject("Food_Item__c").destroy(ID, function(err, ret) {
            if (err || !ret.success) { return console.error(err, res); }
            console.log('Deleted Successfully : ' + res.id);
          });
    }
    catch(error){
        console.log(error.message);
    }
}
module.exports = {
    addSpecificfood,
    getSpecificfood,
    updateSpecificfood,
    deleteSpecificfood
}