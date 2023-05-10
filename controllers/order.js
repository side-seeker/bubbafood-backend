const salesforce = require('../salesforce')
const status = require('http-status')
const chalk = require('chalk')

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
        const order = await salesforce.conn.sobject('UpdatedOrder__c').create({
            User__c: userId,
            Restraunt__c: restaurantId,
            Delivery_Takeaway__c: deliveryOption
        }, (err, ret) => {
            if (err) {
                console.log(err)
                return res.status(status.INTERNAL_SERVER_ERROR).send()
            }
            console.log(ret)
        })

        // Reduce cartItems to array of details
        const orderDetails = Object.keys(cartItems)
            .map(brand => cartItems[brand])
            .reduce((prev, curr) => prev.concat(curr))

        salesforce.conn.sobject('Order_Detail__c')
            .create(orderDetails.map((item) => ({ UpdatedOrder__c: order.id, Food_Item__c: item.Id })), (err, ret) => {
                if (err) {
                    console.log(err)
                }
                ret.forEach((entry) => entry.success ? console.log(chalk.green('Inserted ID:'), entry.id) : console.log(chalk.red('Failed to add Entry')))
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
