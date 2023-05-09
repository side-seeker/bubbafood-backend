const salesforce = require('../salesforce')
async function getOrders(req, res){
    try{
        const name  = req.params.order_id;
        const quantity = req.params.quantity;
        const foodItem = req.params.foodItem_id;
       


salesforce.conn.sobject('Order_Details__c').create({
    Order__c: name,
    Quantity__c: quantity,
    Food_Item__c: foodItem,
}, function(err, res) {
    if (err) { return console.error(err); }
    for (var i=0; i < res.length; i++) {
      if (res[i].success) {
        console.log("Created record id : " + res[i].id);
      }
    }
    return res.redirect('/');
  })
}
catch(err){
    console.log(err.message);
}
}
  