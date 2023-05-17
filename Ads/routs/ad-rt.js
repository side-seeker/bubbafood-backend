const controllers = require('../controllers/ad')
const express = require('express')

const router = express.Router()

// Get Ads of particular brand
router.get('/:brand_id', controllers.getAds)

// To get ads for Home Page
router.get('/', controllers.getHomePageAds)

module.exports = router
