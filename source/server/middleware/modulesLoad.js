import buildHotMiddleware from 'webpack-hot-middleware'

const modulesLoad = (props) => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: buildHotMiddleware(props.compiler)
})

export default modulesLoad
