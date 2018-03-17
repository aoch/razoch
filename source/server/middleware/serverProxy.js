import proxyMiddleware from 'http-proxy-middleware'

const serverProxy = (props) => ({
  urlPattern: '/api/people/:id',
  methodName: 'use',
  invocation: proxyMiddleware({ target: props.target })
})

export default serverProxy
