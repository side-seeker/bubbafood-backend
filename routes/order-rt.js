const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

router.post('/:user_id/:date/:restaurant_id/:option', controllers.getOrders)

// TODO: Creating a Order

// TODO: Canceling a Order

// TODO: Get a Specific Order by Id

// TODO: Updating a Order

module.exports = router
