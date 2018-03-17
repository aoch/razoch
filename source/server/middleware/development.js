import buildDevMiddleware from 'webpack-dev-middleware'

const development = (props) => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: buildDevMiddleware(props.compiler, { noInfo: true })
})

export default development
