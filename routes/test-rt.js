const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

router.get('/hello', controllers.hello)
router.post('/upload', controllers.upload_test)

module.exports = router
