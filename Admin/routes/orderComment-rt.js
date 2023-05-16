const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

//get all complaints and their type from order
router.get('/complaints', controllers.getOrderComplaints)

//get all reviews and their type from order
router.get('/reviews', controllers.getOrderReviews)

//get all feedback and their type from order
router.get('/feedback', controllers.getOrderFeedback)

//update status of complaints in order
router.post('/status/:order_id', controllers.updateOrderStatus)





module.exports = router