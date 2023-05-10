const salesforce = require('../salesforce')
async function getRewards(req,res){
result=await salesforce.conn.query("SELECT ID, Rewards__c FROM User__c ");
return res.send(result.records)
}
async function getnewRewards(req,res){
try{  
const Id = req.params.Id;  
const price=req.params.price;  
const newRewardPoints=Math.floor(price*0.04);
const user=await salesforce.conn.sobject('User__c')
.findOne({ID:Id});
// const currentRewardPoints=user.Rewards__c||0;
// const updatedRewardPoints = 0 + newRewardPoints;
console.log(newRewardPoints)
salesforce.conn.sobject('User__c').find({ID:Id})
.update({Rewards__c: newRewardPoints

},function(err,res)
{
if(err || !res.success){return console.error(err,res);}
 console.log('updated succesfully : '+res)
    });
    return res.send("success");
    
}
    
catch(err){
 console.log(err);
    
}
    
};
    
module.exports={
      getRewards,
     getnewRewards
    }
    
    