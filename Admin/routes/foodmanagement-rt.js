const controllers = require('../controllers')
const express = require('express')

const router = express.Router()


router.post('/create/:brand_id/:name/:description/:rating/:avaliable/:is_veg/:price/:speciality/:type', controllers.addSpecificfood)

router.get('/getSpecificfood/:brand_id', controllers.getSpecificfood)

router.post('/updateSpecificfood/:ID',controllers.updateSpecificfood)

router.delete('/deleteSpecificfood/:ID',controllers.deleteSpecificfood)


module.exports = router