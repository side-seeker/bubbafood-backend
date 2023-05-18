const salesforce = require('../salesforce')
const status = require('http-status')

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

async function getReservation(req, res) {
    const userId = req.params.id
    try {
        const reservation = await salesforce.conn
            .sobject('Reservation__c')
            .select('*')
            .where({
                Id: userId
            })
        return res
            .status(status.OK)
            .json(reservation)
    } catch(err) {
        return res
            .status(status.INTERNAL_SERVER_ERROR)
            .send()
    }
}

module.exports = {
    getComment,
    getReservation
}
