
const addRouter = require('./ad-rt')
const express = require('express')

// Index Router
const router = express.Router()

router.use('/ads', addRouter)


module.exports = router