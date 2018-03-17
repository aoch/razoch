import express from 'express'
import fs from 'fs'
import webpack from 'webpack'
import httpServer from 'spdy'

import config from '../../config/webpack/development/client.babel'
import idempotent from './middleware/idempotent'
import dataCaching from './middleware/dataCaching'
import application from './middleware/application'
import compression from './middleware/compression'
import staticAsset from './middleware/staticAsset'
import development from './middleware/development'
import modulesLoad from './middleware/modulesLoad'
import serverProxy from './middleware/serverProxy'
import logger from './helpers/logger'
import handle from './helpers/handle'
import install from './helpers/install'
import Routes from '../routes/Routes'
import rootReducer from '../store/rootReducer'

const server = express()

const { env: { PORT, NODE_ENV, BUILD_FOLDER } } = process
const isProduction = NODE_ENV === 'production'
const compiler = webpack(config)

logger.debug(`[http.server] ${BUILD_FOLDER}`)

const middlewareList = [
  // dataCaching(),
  serverProxy({ target: 'http://localhost:3001' }),
  isProduction ? idempotent() : development({ compiler }),
  isProduction ? idempotent() : modulesLoad({ compiler }),
  isProduction ? compression() : idempotent(),
  staticAsset({ BUILD_FOLDER }),
  application({ Routes, rootReducer, BUILD_FOLDER }),
]

middlewareList
  .map(install(server))

const options = {
  key: fs.readFileSync('./config/server/.key'),
  cert: fs.readFileSync('./config/server/.crt'),
}

httpServer
  .createServer(options, server)
  .listen(PORT, handle(process, 'http'))
