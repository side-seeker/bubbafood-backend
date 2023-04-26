const controllers = require('../controllers')
const express = require('express')

// Test Router
const router = express.Router()

router.get('/hello', controllers.hello)
router.get('/users', controllers.getUsers)
router.post('/create/:email/:password/:dob/:name/:phone', controllers.signup)
router.get('/login/:email/:password', controllers.loginUser)
router.get('/logout', controllers.logoutUser)
router.get('/brand', controllers.getBrands)
router.get('/food_items/:brand_id', controllers.getFoods)
router.get('/addons/:food_item_id', controllers.getAddons)
router.get('/offers/:brand_id', controllers.getOffers)
router.get('/getTables/:peoples', controllers.getTables)
router.post('/reserve/:table_id/:user_id/:date/:slot', controllers.reserveTable)
router.get('/restraunt/:brand_id', controllers.getRestraunts)

module.exports = router