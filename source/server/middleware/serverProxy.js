import proxyMiddleware from 'http-proxy-middleware'

export default {
  urlPattern: '/api/people/:id',
  methodName: 'use',
  middleware: proxyMiddleware({ target: 'http://localhost:3001' })
}
