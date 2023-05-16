<<<<<<< HEAD
const foodmanagement=require('./foodmanagement')

module.exports = {
    ...foodmanagement
}
    
=======
const order = require('./orderComment')
const reservation = require('./reservationComment')
const user = require('./user')


module.exports = {
    ...order,
    ...reservation,
    ...user
}
>>>>>>> d24293e4698e54d7706f4c833e87467335be4251
