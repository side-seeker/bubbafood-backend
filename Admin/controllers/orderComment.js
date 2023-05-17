const salesforce = require('../../salesforce')

//get all complaints and their type from order
async function getOrderComplaints(req, res){
    try{
        const type= 'complaints';
        result= await salesforce.conn.query("SELECT Id, Comment__c, Complaint_Status__c FROM UpdatedOrder__c WHERE Comment_Type__c= '"+type+"' ")
        return res.send(result.records);
    }
    catch(error){
        console.log(error.message);
    }
}


//get all reviews and their type from order
async function getOrderReviews(req, res){
    try{
        const type= 'reviews';
        result= await salesforce.conn.query("SELECT Id, Comment__c FROM UpdatedOrder__c WHERE Comment_Type__c= '"+type+"' ")
        return res.send(result.records);
    }
    catch(error){
        console.log(error.message);
    }
}


//get all feedback and their type from order
async function getOrderFeedback(req, res){
    try{
        const type= 'feedback';
        result= await salesforce.conn.query("SELECT Id, Comment__c FROM UpdatedOrder__c WHERE Comment_Type__c= '"+type+"' ")
        return res.send(result.records);
    }
    catch(error){
        console.log(error.message);
    }
}


//update status of complaints in order
async function updateOrderStatus(req, res){
    try{
        const status= 'Completed';
        const order_id = req.params.order_id;
        salesforce.conn.sobject('UpdatedOrder__c').find({ Id: order_id })
            .update({
                Complaint_Status__c: status
            }, function(err, res) {
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

module.exports = {
    getOrderComplaints,
    getOrderReviews,
    getOrderFeedback,
    updateOrderStatus
};
