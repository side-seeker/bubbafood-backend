const foodManagementRouter = require('./foodmanagement-rt')
const express = require('express')

// Index Router
const router = express.Router()
router.use('/foodManagement', foodManagementRouter)
module.exports = router