const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// get menu of a particular brand
router.post('/neworder', controllers.createOrders)

router.get('/get/:user_id', controllers.getOrders)

module.exports = router
