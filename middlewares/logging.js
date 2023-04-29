const morgan = require('morgan')
const chalk = require('chalk')

const logger = morgan(
    (tokens, req, res) => {

        const status = parseInt(tokens.status(req, res))

        const color = 
            status >= 500 ? chalk.red :
            status >= 400 ? chalk.yellow :
            status >= 300 ? chalk.cyan :
            status >= 200 ? chalk.green :
            chalk.grey; 

        return [
            chalk.bgBlue(` ${tokens.method(req, res)} `),
            color.bold(status),
            tokens.url(req, res),
            chalk.green.bold(tokens['response-time'](req, res) + ' ms'),
            chalk.grey.bold('@ ' + tokens.date(req, res)),
        ].join('  ')
    }
)

module.exports = logger