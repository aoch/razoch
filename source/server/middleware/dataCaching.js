import apicache from 'apicache'
import logger from '../utilities/logger'

const dataCaching = () => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: (request, response, next) => {
    logger.info(`[dataCaching.middleware] ${request.path}`)
    return apicache.middleware('24 hours')(request, response, next)
  }
})

export default dataCaching
