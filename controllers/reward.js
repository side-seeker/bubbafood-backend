const salesforce = require('../salesforce')

async function getrewards(req,res){
    const user_id = req.params.user_id;
    result=await salesforce.conn.query("SELECT * from user__c Where user_id='"+user_id+"'");
    return res.send(result.records)
}

async function  (req,res){
    try{

const AmountSpent= req.params.AmountSpent;
const rewardPoints=Math.floor(AmountSpent*0.04);
const user_id = req.params.user_id;
salesforce.conn.sobject('User__c').find({Id: user_id})
.update({ reward__c=rewardPoints,#####=:AmountSpent}
,function(err,res){
     if(err||!res.success){return.console.error(err,res);}
 console.log('updated succesfully : '+res)

})

console.log(result.records)

return res.send(result.records);

} 
module.exports={
    getrewards
}