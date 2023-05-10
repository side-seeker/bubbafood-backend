const addRouter = require('./routs/ad-rt.js')
const express = require('express')

// Index Router
const router = express.Router()

router.use('/ads', addRouter)

module.exports = router
