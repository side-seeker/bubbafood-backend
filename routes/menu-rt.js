const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

// get menu of a particular brand
router.get('/get/:brand_id', controllers.getMenu)

// get menu of a particular brand
router.get('/homepage', controllers.getHomeOffers)

// TODO: get item from menu of a particular brand
// router.get("/:brand/menu/:item", controllers.getItem)

// FIXME: merge addon with a particular item
router.get(':brand/:item/addons', controllers.getAddons)

module.exports = router
