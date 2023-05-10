const salesforce = require('../salesforce')



//fetch restraunt given the brand id

async function getRestraunts(req, res) {
    const brand_id = req.params.brand_id;

    result = await salesforce.conn.query("SELECT Name, Address__c,Name__c, Image_URL__c From Restraunt__c WHERE Brand__c='" + brand_id + "'");

    return res.send(result.records);

}



//fetch available table details for given capacity

async function getTables(req, res) {

    const peoples = req.params.peoples;

    result = await salesforce.conn.query("SELECT Capacity__c, Restraunt__c, Slot_1__c, Slot_2__c, Slot_3__c, Slot_4__c, Name FROM Table__c WHERE Capacity__c>= " + peoples + "");

    return res.send(result.records);

}



//Table Reservation

async function reserveTable(req, res) {

    const table_id = req.params.table_id;

    const user_id = req.params.user_id;

 //   const date = req.params.date;

    const slot = req.params.slot;



    salesforce.conn.sobject('Reservation__c').create({

        //Date__c: date,

        Slot__c: slot,

        Table__c: table_id,

        User__c: user_id

    }, (err, res) => {

        if (err || !res.success) { return console.error(err, res); }

        console.log("Created record id : " + res.id);

    })

    return res.redirect('/');
}  



module.exports = {

    getTables,

    reserveTable,

    getRestraunts
}
