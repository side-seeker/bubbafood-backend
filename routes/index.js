const testRouter = require('./test-rt')
const userRouter = require('./user-rt')
const brandRouter = require('./brand-rt')
const menuRouter = require('./menu-rt')
const commentRouter= require('./comment-rt')
const restRouter = require('./restaurant-rt')
const ordercommentRouter=require('./ordercomment-rt')
const rewardsRouter=require('./rewards-rt')
const orderRouter = require('./order-rt.js')
const reservation = require('./Reservation-rt.js')
const express = require('express')

// Index Router
const router = express.Router()
router.use('/test', testRouter)
router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/menu', menuRouter)
router.use('/restaurant', restRouter)
router.use('/comment',commentRouter)
router.use('/ordercomment',ordercommentRouter)
router.use('/order', orderRouter)
router.use('/rewards',rewardsRouter)
router.use('/reserve',reservation)
module.exports = router
