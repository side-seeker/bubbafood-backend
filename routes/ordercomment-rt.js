const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// get the Comment
router.get('/Order/Id', controllers.fetchOrder)

router.post('/:order_id/:commentType', controllers.getOrdercomment)

module.exports = router