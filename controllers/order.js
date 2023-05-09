const salesforce = require('../salesforce')
const status = require('http-status')

/**
 * Get Orders for a Customer
**/
async function createOrders(req, res) {
    try {
        const userId = req.body.user_id
        const restaurantId = req.body.restaurant_id
        const cartItems = req.body.cart
        const paymentType = req.body.payment // Mode of Payment
        const deliveryOption = req.body.type

        // TODO: Payment Details Pending for now...

        // Obtain the Result Order
        const order = await salesforce.conn.sobject('Order__c').create({
            User__c: userId,
            Restraunt__c: restaurantId,
            Takeaway_Delivery__c: deliveryOption
        }, (err, ret) => {
            if (err) {
                console.log(err)
                return res.status(status.INTERNAL_SERVER_ERROR).send()
            }
            console.log(ret)
        })

        salesforce.conn.sobject('Order_Details__c')
            .create(cartItems.map((item) => ({ Order__c: order.id, Food_Item__c: item.ID, Quantity: 1 })), (err, _ret) => {
                if (err) {
                    console.log(err)
                }
            })
        return res.status(status.CREATED).send()
    }
    catch (err) {
        console.log(err);
        return res.status(status.BAD_REQUEST).send()
    }
}


module.exports = {
    createOrders
}
