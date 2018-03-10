import chalk from 'chalk'
import winston from 'winston'

const log = (level, colour) => (message) => winston.log(level, colour(message))
const info = log('info', chalk.greenBright)
const error = log('error', chalk.redBright)
const debug = log('error', chalk.yellowBright)

export default {
  info,
  error,
  debug
}
