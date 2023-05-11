const hello = require('./hello')
const user = require('./user')
const brand = require('./brand')
const menu = require('./menu')
const restaurant = require('./restaurant')
const comment=require('./comment')
const ordercomment=require('./ordercomment')
const rewards=require('./rewards')
const orders = require('./order.js')

module.exports = {
    ...hello,
    ...user,
    ...brand,
    ...menu,
    ...restaurant,
    ...comment,
    ...ordercomment,
    ...rewards,
    ...orders
}
