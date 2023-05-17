const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// Get menu of a particular brand
router.get('/get/:brand_id', controllers.getMenu)

// Get menu for specials
router.get('/homepage', controllers.getHomeOffers)

router.get('/:item/addons', controllers.getAddons)

module.exports = router
