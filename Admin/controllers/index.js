const order = require('./orderComment')
const reservation = require('./reservationComment')
const user = require('./user')


module.exports = {
    ...order,
    ...reservation,
    ...user
}