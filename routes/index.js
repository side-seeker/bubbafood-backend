const userRouter = require('./user-rt')
const brandRouter = require('./brand-rt')
const menuRouter = require('./menu-rt')
const commentRouter= require('./comment-rt')
const restRouter = require('./restaurant-rt')
const orderRouter = require('./order-rt.js')
const express = require('express')

// Index Router
const router = express.Router()

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/menu', menuRouter)
router.use('/restaurant', restRouter)
router.use('/comment',commentRouter)
router.use('/order', orderRouter)

module.exports = router
