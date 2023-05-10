const salesforce = require('../salesforce')
async function fetchOrder(req, res){
    result= await salesforce.conn.query("SELECT Id, Date__c FROM Order__c ")
    return res.send(result.records)
}

async function getOrdercomment(req, res){

    try{
        const order_id=req.params.order_id;
        const commentText=req.body.message;
        const commentType =req.params.commentType;
        salesforce.conn.sobject('Order__c').find({ID: order_id})
        .update({ Comments__c:commentText, Comments_Type__c:commentType
        }, function(err, res){
            if (err || !res.success){ return console.error(err, res); }
            console.log('Updated Successfully : ' + res)
        })

        ;
        return res.send('Success');
    } 
    catch(err){
        console.log(err);
    }
};
module.exports={
    fetchOrder,
    getOrdercomment
};