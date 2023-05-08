const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// get the Comment
router.get('/Reservation/Id', controllers.fetchReservation)

router.post('/:res_id/:commentType', controllers.getComment)

module.exports = router