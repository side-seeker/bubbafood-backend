const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

router.post('/create', controllers.signup)

router.post('/login', controllers.loginUser)

router.get('/:token', controllers.token)

router.get('/get/:id', controllers.getUser)

router.post('/update', controllers.updateUser)

module.exports = router
