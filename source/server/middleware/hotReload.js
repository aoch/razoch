import webpack from 'webpack'
import buildDevMiddleware from 'webpack-dev-middleware'
import buildHotMiddleware from 'webpack-hot-middleware'

import configList from '../../../configs/webpack/development.babel'

const config = configList[0]
const compiler = webpack(config)
const devMiddleware = buildDevMiddleware(compiler, { noInfo: true })
const hotMiddleware = buildHotMiddleware(compiler)

export {
  devMiddleware,
  hotMiddleware
}
