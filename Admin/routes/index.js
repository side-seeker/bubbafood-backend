const foodManagementRouter = require('./foodmanagement-rt')
const orderCommentRouter=require('./orderComment-rt.js')
const reservationCommentRouter=require('./reservationComment-rt')
const userRouter=require('./user-rt.js')

const express = require('express')

// Index Router
const router = express.Router()
router.use('/foodManagement', foodManagementRouter)
router.use('/reservation',reservationCommentRouter)
router.use('/order',orderCommentRouter)
router.use('/user',userRouter)
module.exports = router