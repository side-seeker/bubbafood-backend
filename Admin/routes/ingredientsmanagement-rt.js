const controllers = require('../controllers')
const express = require('express')

const router = express.Router()
router.get('/:brand_id', controllers.getSpecificIngredients)
router.post('/createSpecificIngredients/:brand_id/:Avaliable/:Ingredient_name', controllers.createSpecificIngredients)
router.post('/:ingredient_id/:Avaliable', controllers.updateSpecificIngredients)
router.delete('/:ingredient_id', controllers.deleteSpecificIngredients)

module.exports = router