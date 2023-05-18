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

        //  TODO: Payment Details Pending for now...

        // Obtain the Result Order
        const order = await salesforce.conn
            .sobject('UpdatedOrder__c')
            .create({
                User__c: userId,
                Restraunt__c: restaurantId,
                Date__c: new Date().toISOString(),
                Delivery_Takeaway__c: deliveryOption
            }, (err, ret) => {
                if (err) {
                    console.log(err)
                    throw err
                }
                return ret
            })

        const price = Object.keys(cartItems)
            .map((brand) => {
                return cartItems[brand]
                    .map((item) => item.Price__c + item.addons.reduce((prev, curr) => prev + curr.Price__c, 0))
                    .reduce((prev, curr) => prev + curr, 0)
            })
            .reduce((prev, curr) => prev + curr, 0)


        // Reduce cartItems to array of details
        const orderDetails = Object.keys(cartItems)
            .map(brand => cartItems[brand])
            .reduce((prev, curr) => prev.concat(curr))

        salesforce.conn.sobject('Order_Detail__c')
            .create(
                orderDetails
                    .map((item) => ({ UpdatedOrder__c: order.id, Food_Item__c: item.Id })),
                (err, ret) => {
                    if (err) {
                        console.log(err)
                        throw err
                    }
                    ret.forEach(
                        (entry) => entry.success ?
                            console.log(chalk.green('Inserted ID:'), entry.id)
                            : console.log(chalk.red('Failed to add Entry')))
                })

        const newRewardPoints = Math.floor(price * 0.04);
        const user = await salesforce.conn.sobject('User__c')
            .findOne({ ID: userId });

        salesforce.conn
            .sobject('User__c')
            .find({ ID: userId })
            .update({
                Rewards__c: (user.Rewards__c || 0) + newRewardPoints
            });

        return res.status(status.CREATED).json({rewards: (user.Rewards__c || 0) + newRewardPoints, newRewards: newRewardPoints})
    }
    catch (err) {
        console.log(err);
        return res.status(status.BAD_REQUEST).send()
    }
}

async function getOrders(req, res) {
    const userId = req.params.user_id

    try {
        const orders = await salesforce.conn
            .sobject('UpdatedOrder__c')
            .select('Id, Date__c')
            .where({
                User__c: userId
            })

        const orderDetails = await Promise.all(orders.map(async order => {
            const foodItems = await salesforce.conn.query(`
            SELECT Id, Name__c, Price__c, Image_Url__c
            FROM Food_Item__c
            WHERE Id IN (SELECT Food_Item__c FROM Order_Detail__c WHERE UpdatedOrder__c = '${order.Id}')
        `)
            return { order, items: foodItems.records }
        }))

        console.log(orderDetails)

        return res
            .status(status.OK)
            .json(orderDetails)
    } catch (err) {
        console.log(err)
        return res
            .status(status.INTERNAL_SERVER_ERROR)
            .send()
    }
}


module.exports = {
    createOrders,
    getOrders
}
