const foodmanagement=require('./foodmanagement')
const order=require('./orderComment')
const reservation=require('./reservationComment')
const user=require('./user')

module.exports = {
    ...foodmanagement,
    ...order,
    ...reservation,
    ...user
}
    
