const order = require('./orderComment')
const reservation = require('./reservationComment')
const user = require('./user')
const ingredientsmanagement = require('./ingredientsmanagement')


module.exports = {
    ...order,
    ...reservation,
    ...user,
    ...ingredientsmanagement
}