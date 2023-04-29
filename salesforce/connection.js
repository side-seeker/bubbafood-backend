const salesforce = require('jsforce')
require('dotenv').config()

const conn = new salesforce.Connection({
    loginUrl: process.env.SALESFORCE_URL
})

const sf = conn.login(process.env.SALESFORCE_USERNAME, process.env.SALESFORCE_PWD)


module.exports = {
    conn,
    sf
}