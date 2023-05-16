const reservationCommentRouter = require('./reservationComment-rt')
const orderCommentRouter = require('./orderComment-rt.js')
const userRouter = require('./user-rt.js')

const express = require('express')

// Index Router
const router = express.Router()

router.use('/reservation',reservationCommentRouter)
router.use('/order', orderCommentRouter)
router.use('/user', userRouter)

module.exports = router