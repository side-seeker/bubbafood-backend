const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// FIXME: JSON data
router.post('/create/:email/:password/:dob/:name/:phone', controllers.signup)

// FIXME: JSON data
router.get('/login/:email/:password', controllers.loginUser)

// FIXME: Not required
router.get('/logout', controllers.logoutUser)

module.exports = router