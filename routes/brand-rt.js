const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// get all the brand
router.get('/brands', controllers.getBrands)

// FIXME: This is actually ads
router.get('/:brand_id/offers', controllers.getOffers)

module.exports = router