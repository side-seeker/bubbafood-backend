const reservationCommentRouter = require('./reservationComment-rt')
const orderCommentRouter = require('./orderComment-rt.js')
const userRouter = require('./user-rt.js')
const ingredientsmanagementRouter = require('./ingredientsmanagement-rt')

const express = require('express')

// Index Router
const router = express.Router()

router.use('/reservation',reservationCommentRouter)
router.use('/order', orderCommentRouter)
router.use('/user', userRouter)
router.use('/ingredientsmanagement', ingredientsmanagementRouter)

module.exports = router