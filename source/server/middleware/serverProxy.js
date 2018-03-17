import proxyMiddleware from 'http-proxy-middleware'

const serverProxy = (props) => ({
  urlPattern: '/api/people/:id',
  methodName: 'use',
  invocation: (request, response, next) => {
    const { target } = props
    const config = { target }
    return proxyMiddleware(config)(request, response, next)
  }
})

export default serverProxy
