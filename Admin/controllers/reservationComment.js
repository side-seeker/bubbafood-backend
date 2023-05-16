const salesforce = require('../../salesforce')


//get all complaints and their type from reservation
async function getReservationComplaints(req, res){
    try{
        const type= 'complaints';
        result= await salesforce.conn.query("SELECT Id, Comment__c, Complaint_Status__c FROM Reservation__c WHERE Comment_Type__c= '"+type+"' ")
        return res.send(result.records);
    }
    catch(error){
        console.log(error.message);
    }
}


//get all reviews and their type from reservation
async function getReservationReviews(req, res){
    try{
        const type= 'reviews';
        result= await salesforce.conn.query("SELECT Id, Comment__c FROM Reservation__c WHERE Comment_Type__c= '"+type+"' ")
        return res.send(result.records);
    }
    catch(error){
        console.log(error.message);
    }
}


//get all feedback and their type from reservation
async function getReservationFeedback(req, res){
    try{
        const type= 'feedback';
        result= await salesforce.conn.query("SELECT Id, Comment__c FROM Reservation__c WHERE Comment_Type__c= '"+type+"' ")
        return res.send(result.records);
    }
    catch(error){
        console.log(error.message);
    }
}


//update status of complaints in reservation
async function updateReservationStatus(req, res){
    try{
        const status= 'Completed';
        const res_id = req.params.res_id;
        salesforce.conn.sobject('Reservation__c').find({ Id: res_id })
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
    getReservationComplaints,
    getReservationReviews,
    getReservationFeedback,
    updateReservationStatus
};