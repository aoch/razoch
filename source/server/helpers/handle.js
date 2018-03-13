import logger from './logger'

const handle = (process, type) => (error) => {
  const { env: { IP, PORT, NODE_ENV } } = process
  const [level, message] = error
    ? ['error', error.toString()]
    : ['info', `[${NODE_ENV}] ${type} server running on ${IP}:${PORT}`]
  logger[level](message)
}

export default handle
