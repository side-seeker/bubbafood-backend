const controllers = require('../controllers/ad')
const express = require('express')

const router = express.Router()

// get ads of perticular brand
router.get('/:brand_id', controllers.getAds)

// to get ads for home Page
router.get('/',controllers.getHomepageads)

module.exports = router