import webpack from 'webpack'
import buildDevMiddleware from 'webpack-dev-middleware'
import buildHotMiddleware from 'webpack-hot-middleware'

import config from '../../../configs/webpack/development.client.babel'

const compiler = webpack(config)
const devMiddleware = buildDevMiddleware(compiler, { noInfo: true })
const hotMiddleware = buildHotMiddleware(compiler)

export {
  devMiddleware,
  hotMiddleware
}
