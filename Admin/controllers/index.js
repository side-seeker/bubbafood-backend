const foodmanagement=require('./foodmanagement')
const orderComment=require('./orderComment')
const reservationComment=require('./reservationComment')
const order = require('./order')
const user=require('./user')
const ingredientsmanagement=require('./ingredientsmanagement')

module.exports = {
    ...foodmanagement,
    ...orderComment,
    ...reservationComment,
    ...user,
    ...order,
    ...ingredientsmanagement
}
    
