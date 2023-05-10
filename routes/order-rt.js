const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// TODO: Creating a Order
router.post('/neworder', controllers.createOrders)

// TODO: Canceling a Order

// TODO: Get a Specific Order by Id

// TODO: Updating a Order

module.exports = router
