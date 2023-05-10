const controllers = require('../controllers')
const express = require('express')

const router = express.Router()

router.get('/calculateRewards',(req,res)=>{

    const amountSpent=parseFloat(req.query.amountSpent);
    
    const rewardPoints=calculateRewards(amountSpent);
    
    router.post('/users/:user_id/points',controller.getrewards)
    
    res.json({rewardPoints});
    
    });
module.exports = router