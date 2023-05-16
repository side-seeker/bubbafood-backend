const foodmanagement=require('./foodmanagement')
const order=require('./orderComment')
const reservation=require('./reservationComment')
const user=require('./user')
const ingredientsmanagement=require('./ingredientsmanagement')

module.exports = {
    ...foodmanagement,
    ...order,
    ...reservation,
    ...user,
    ...ingredientsmanagement
}
    
