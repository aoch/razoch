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
import handle from './helpers/handle'
import install from './helpers/install'
import Routes from '../routes/routes'
import rootReducer from '../store/rootReducer'

const server = express()

const { env: { PORT, NODE_ENV, BUILD_FOLDER } } = process
const isProduction = NODE_ENV === 'production'
const compiler = webpack(config)

const middlewareList = [
  dataCaching(),
  application({ Routes, rootReducer, BUILD_FOLDER }),
  isProduction ? compression() : idempotent(),
  isProduction ? staticAsset({ BUILD_FOLDER }) : idempotent(),
  isProduction ? idempotent() : development({ compiler }),
  isProduction ? idempotent() : modulesLoad({ compiler }),
  serverProxy({ target: 'http://localhost:3001' })
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
