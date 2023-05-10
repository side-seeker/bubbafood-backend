const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// FIXME: get tables for a specific restaurant
router.get('/:brandId', controllers.getRestraunts)
router.get('/getTables/:peoples', controllers.getTables)

// FIXME: book a table through json data
// router.post('/reserve/:table_id', controllers.reserveTable)
router.post('/reserve/:table_id/:user_id/:date/:slot', controllers.reserveTable)

module.exports = router
