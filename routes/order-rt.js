const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

router.post('/:user_id/:date/:restaurant_id/:option', controllers.getOrders)

module.exports = router