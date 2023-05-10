
const salesforce = require('../salesforce')
<<<<<<< HEAD
async function fetchReservation(req, res){
    result= await salesforce.conn.query("SELECT Id, Date__c FROM Reservation__c ")
=======

<<<<<<< HEAD
async function fetchReservation(req, res) {

    result = await salesforce.conn.query("SELECT Id, Date__c FROM Reservation__c ")

=======
async function fetchReservation(_req, res) {
    result = await salesforce.conn.query("SELECT Id, Date__c FROM Reservation__c ")
>>>>>>> c92b057131db08637823184faeded2301e9d4a12
>>>>>>> e38be19ab11b58e6f13746e64964f35cae5ae6b8
    return res.send(result.records)

}

<<<<<<< HEAD
async function getComment(req, res){
=======
<<<<<<< HEAD



async function getComment(req, res) {




    try {

        const res_id = req.params.res_id;

        const commentText = req.body.message;

        const commentType = req.params.commentType;

        salesforce.conn.sobject('Reservation__c').find({ Id: res_id })

            .update({
                Comment__c: commentText, Comment_Type__c: commentType

            }, function (err, res) {

                if (err || !res.success) { return console.error(err, res); }

                console.log('Updated Successfully : ' + res)

            })




            ;

        return res.send('Success');

=======
async function getComment(req, res) {
    try {
        const res_id = req.params.res_id;
        const commentText = req.body.message;
        const commentType = req.params.commentType;
        salesforce.conn.sobject('Reservation__c').find({ Id: res_id })
            .update({
                Comment__c: commentText, Comment_Type__c: commentType
            }, function(err, res) {
                if (err || !res.success) { return console.error(err, res); }
                console.log('Updated Successfully : ' + res)
            })
>>>>>>> e38be19ab11b58e6f13746e64964f35cae5ae6b8

    try{
        const res_id=req.params.res_id;
        const commentText=req.body.message;
        const commentType =req.params.commentType;
        salesforce.conn.sobject('Reservation__c').find({Id: res_id})
        .update({ Comment__c:commentText, Comment_Type__c:commentType
        }, function(err, res){
            if (err || !res.success){ return console.error(err, res); }
            console.log('Updated Successfully : ' + res)
        })

        ;
        return res.send('Success');
    } 
    catch(err){
        console.log(err);
>>>>>>> c92b057131db08637823184faeded2301e9d4a12
    }

    catch (err) {

        console.log(err);

    }

};
<<<<<<< HEAD
module.exports={
=======
<<<<<<< HEAD

module.exports = {

=======
module.exports = {
>>>>>>> c92b057131db08637823184faeded2301e9d4a12
>>>>>>> e38be19ab11b58e6f13746e64964f35cae5ae6b8
    fetchReservation,

    getComment
<<<<<<< HEAD
};
=======
<<<<<<< HEAD

};


=======
};
>>>>>>> c92b057131db08637823184faeded2301e9d4a12
>>>>>>> e38be19ab11b58e6f13746e64964f35cae5ae6b8
