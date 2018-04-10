import logger from '../utilities/logger'

const idempotent = () => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: (request, response, next) => {
    logger.info(`[idempotent.middleware] ${request.path}`)
    next()
  }
})

export default idempotent
