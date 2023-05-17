const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

//get all the orders that are completed
router.get('/complete', controllers.getCOrder);

//get all the orders that are in progress
router.get('/in_progress', controllers.getPOrder);

//update order status from in progress to completed
router.post('/updateStatus/:order_Id/:status', controllers.updateOrder);

//get the details of a order given the order id
router.get('/order_detail/:order_id', controllers.getOrderDetails);


module.exports = router;
