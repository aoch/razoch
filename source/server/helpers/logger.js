import chalk from 'chalk'
import winston from 'winston'

const log = (level, colour) => (message) => winston.log(level, colour(message))
const info = log('info', chalk.greenBright)
const error = log('error', chalk.redBright)

export default {
  info,
  error
}
