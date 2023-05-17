const foodManagementRouter = require('./foodmanagement-rt')
const orderCommentRouter=require('./orderComment-rt.js')
const reservationCommentRouter=require('./reservationComment-rt')
const userRouter=require('./user-rt.js')
const ingredientsmanagementRouter=require('./ingredientsmanagement-rt')
const express = require('express')
const orderRouter = require('./order-rt')

// Index Router
const router = express.Router()
router.use('/foodManagement', foodManagementRouter)
router.use('/reservation',reservationCommentRouter)
router.use('/order',orderCommentRouter)
router.use('/user',userRouter)
router.use('/ingredientsmanagement',ingredientsmanagementRouter)
router.use('/order', orderRouter)
module.exports = router