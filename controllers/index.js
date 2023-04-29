const test = require('./test')
const user = require('./user')
const brand = require('./brand')
const menu = require('./menu')
const restaurant = require('./restaurant')

module.exports = {
    ...test,
    ...user,
    ...brand,
    ...menu,
    ...restaurant
}