
const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// get menu of a particular brand
router.post('/neworder', controllers.createOrders)

module.exports = router
