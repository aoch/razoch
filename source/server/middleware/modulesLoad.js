import buildHotMiddleware from 'webpack-hot-middleware'

export default ({ compiler }) => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: buildHotMiddleware(compiler)
})
