const testRouter = require('./test-rt')
const userRouter = require('./user-rt')
const brandRouter = require('./brand-rt')
const menuRouter = require('./menu-rt')
const restRouter = require('./restaurant-rt')
const express = require('express')

// Index Router
const router = express.Router()

router.use('/test', testRouter)
router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/menu', menuRouter)
router.use('/restaurant', restRouter)

module.exports = router
