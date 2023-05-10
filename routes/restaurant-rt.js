const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// to get restraunt as per brand

router.get('/get/:brand_id', controllers.getRestraunts)

// FIXME: get tables for a specific restaurant
// route.get('/resaurant_id/tables)
router.get('/getTables/:peoples', controllers.getTables)

// FIXME: book a table through json data
// router.post('/reserve/:table_id', controllers.reserveTable)
router.post('/reserve/:table_id/:user_id/:date/:slot', controllers.reserveTable)

module.exports = router