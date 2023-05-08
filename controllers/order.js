const salesforce = require('../salesforce')


async function getOrders(req, res){
    try{
        const user_id = req.params.user_id;
        const date = req.params.date;
        const restaurant_id = req.params.restaurant_id;
        const option = req.params.option;
        //  const paymentDetail = req.params.paymentDetail;

        salesforce.conn.sobject('Order__c').create({
            User__c: user_id,  
            Date__c: date,
            Restraunt__c: restaurant_id,
            Takeaway_Delivery__c: option
        
        }, (err, res) => {
            if (err || !res.success) { return console.error(err, res); }
            console.log("Created record id : " + res.id);
        })
        return res.send('success')
    }
    catch(err){
        console.log(err.message);
    }
}


module.exports = {
    getOrders
}