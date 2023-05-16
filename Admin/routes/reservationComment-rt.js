const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

//get all complaints and their type from reservation
router.get('/complaints', controllers.getReservationComplaints)

//get all reviews and their type from reservation
router.get('/reviews', controllers.getReservationReviews)

//get all feedback and their type from reservation
router.get('/feedback', controllers.getReservationFeedback)

//update status of complaints in reservation
router.post('/status/:res_id', controllers.updateReservationStatus)





module.exports = router