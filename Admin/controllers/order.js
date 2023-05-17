const salesforce = require('../../salesforce')

//get all orders that are completed
async function getCOrder(req,res){
    try{
        const status='Completed';
        result = await salesforce.conn.query("SELECT Id, Date__c, Delivery_Takeaway__c, Payment_Detail__c, Restraunt__c, User__c FROM UpdatedOrder__c WHERE Status__c= '" +status+ "' ");
        return res.send(result.records)
    }
    catch(error){
        console.log(error.message)
    }
}

//get all orders that are in progress
async function getPOrder(req,res){
    try{
        const status='In Progress';
        result = await salesforce.conn.query("SELECT Id, Date__c, Delivery_Takeaway__c, Payment_Detail__c, Restraunt__c, User__c FROM UpdatedOrder__c WHERE Status__c= '" +status+ "' ");
        return res.send(result.records)
    }
    catch(error){
        console.log(error.message)
    }
}

//update status of order given the order id
async function updateOrder(req,res){
    try{
        const order_Id= req.params.order_Id;
        const newStatus= req.params.status;
        salesforce.conn.sobject('UpdatedOrder__c').find({Id: order_Id})
        .update({
            Status__c:newStatus
        },function(err,res){
            if(err|| !res.success){return console.error(err,res);}
            console.log('Updated Succesfully:'+  res)
        });
        return res.send('Success');
    }
    catch(err){
        console.log(err.message);
    }
}


//get details about the order given the order id
async function getOrderDetails(req, res){
    try{
        const order_id= req.params.order_id;
        result= await salesforce.conn.query("SELECT Id, Food_Item__c, Quantity__c, Name FROM Order_Detail__c WHERE UpdatedOrder__c= '" +order_id+ "' ")
        return res.send(result.records);
    }
    catch(err){
        console.log(err.message);
    }
}



module.exports= {
    getCOrder,
    getPOrder,
    updateOrder,
    getOrderDetails
}; 
