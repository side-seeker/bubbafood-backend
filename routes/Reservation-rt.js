const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

router.get('/:user_id/:table_id/Comment', controllers.getComment)

router.get('/get/:user_id', controllers.getReservation)

module.exports = router
