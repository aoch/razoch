import logger from '../../helpers/logger'

const compression = () => ({
  urlPattern: '*.js',
  methodName: 'get',
  invocation: (request, response, next) => {
    logger.info(`[compression.middleware] ${request.path}`)
    const encoding = request.headers['accept-encoding'] || ''
    if (encoding.toLowerCase().includes('gzip')) {
      request.url += '.gz'
      response.set('Content-Encoding', 'gzip')
    }
    next()
  }
})

export default compression
