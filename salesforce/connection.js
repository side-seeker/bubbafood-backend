const salesforce = require('jsforce')
require('dotenv').config()

const conn = new salesforce.Connection({
    loginUrl: process.env.SALESFORCE_URL
})


module.exports = {
    conn
}
