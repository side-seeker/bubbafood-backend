<<<<<<< HEAD
const foodManagementRouter = require('./foodmanagement-rt')
=======
const reservationCommentRouter = require('./reservationComment-rt')
const orderCommentRouter = require('./orderComment-rt.js')
const userRouter = require('./user-rt.js')

>>>>>>> d24293e4698e54d7706f4c833e87467335be4251
const express = require('express')

// Index Router
const router = express.Router()
<<<<<<< HEAD
router.use('/foodManagement', foodManagementRouter)
=======

router.use('/reservation',reservationCommentRouter)
router.use('/order', orderCommentRouter)
router.use('/user', userRouter)

>>>>>>> d24293e4698e54d7706f4c833e87467335be4251
module.exports = router