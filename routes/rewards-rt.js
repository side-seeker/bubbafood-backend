const controllers = require('../controllers')
const express = require('express');
const router=express.Router();
router.get('/Rewards/:Id', controllers.getRewards)
router.post('/Rewards/:Id/:price', controllers.getnewRewards);
module.exports=router