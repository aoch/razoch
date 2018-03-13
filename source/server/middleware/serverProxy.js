import proxyMiddleware from 'http-proxy-middleware'

export default ({ target }) => ({
  urlPattern: '/api/people/:id',
  methodName: 'use',
  invocation: proxyMiddleware({ target })
})
