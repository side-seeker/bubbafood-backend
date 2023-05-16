const salesforce = require('../salesforce')

async function getComment(req,res)
{
    try{
        const table_id = req.params.table_id;
        const user_id = req.params.user_id;
        result = await salesforce.conn.query("SELECT Comment__c FROM Reservation__c WHERE User__c =  '"+user_id+"'  AND Table__c = '" +table_id+ "' ");
        console.log(result.records)
        return res.send(result.records);
    }
    catch(err){
        console.log(err.message);
    }
    
}
module.exports = {
    getComment
}