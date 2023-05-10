const controllers = require('../controllers/ad')
const express = require('express')

const router = express.Router()

// get ads of perticular brand
router.get('/:brand_id', controllers.getAds)


module.exports = router