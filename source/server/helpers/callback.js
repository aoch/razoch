import winston from 'winston'
import chalk from 'chalk'

const callback = (process, type) => (error) => {
  const { env: { IP, PORT, NODE_ENV } } = process
  const [level, message, decorate] = error
    ? ['error', error.toString(), chalk.redBright]
    : ['info', `[${NODE_ENV}] ${type} server running on ${IP}:${PORT}`, chalk.yellowBright]

  const divider = '-'.repeat(120)
  winston.log(level, decorate(divider))
  winston.log(level, decorate(message))
  winston.log(level, decorate(divider))
}

export default callback
