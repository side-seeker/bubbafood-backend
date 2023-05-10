const user = require('./user')
const brand = require('./brand')
const menu = require('./menu')
const restaurant = require('./restaurant')
const order = require('./order.js')
const comment = require('./comment')

module.exports = {
    ...order,
    ...user,
    ...brand,
    ...menu,
    ...restaurant,
    ...comment
}
