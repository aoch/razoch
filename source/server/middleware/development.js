import buildDevMiddleware from 'webpack-dev-middleware'

export default ({ compiler }) => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: buildDevMiddleware(compiler, { noInfo: true })
})
