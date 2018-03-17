import chalk from 'chalk'
import winston from 'winston'

const logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({ level: 'debug' })
  ]
})

const log = (level, colour) => (message) => logger.log(level, colour(message))
const info = log('info', chalk.greenBright)
const error = log('error', chalk.redBright)
const debug = log('debug', chalk.yellowBright)

export default {
  info,
  error,
  debug
}
