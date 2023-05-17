const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// restraunt manager signup
router.post('/restraunt_manager/create/:email/:password/:name/:phone/:res_id', controllers.RMsignup)

// restraunt manager login
router.get('/restraunt_manager/login/:email/:password', controllers.RMlogin)

// customer support signup
router.post('/customer_support/create/:email/:password/:name/:phone/:res_id', controllers.CSsignup)

// customer support login
router.get('/customer_support/login/:email/:password', controllers.CSlogin)


module.exports = router