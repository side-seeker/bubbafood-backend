const salesforce = require('../salesforce')
async function fetchReservation(req, res) {
    result = await salesforce.conn.query("SELECT Id, Date__c FROM Reservation__c ")
    return res.send(result.records)
}
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
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = {
    fetchReservation,
    getComment
};


