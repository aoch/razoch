import express from 'express'
import fs from 'fs'
import webpack from 'webpack'
import httpServer from 'spdy'
import { identity } from 'ramda'

import config from '../../configs/webpack/development.client.babel'
import dataCaching from './middleware/dataCaching'
import application from './middleware/application'
import compression from './middleware/compression'
import staticAsset from './middleware/staticAsset'
import development from './middleware/development'
import modulesLoad from './middleware/modulesLoad'
import serverProxy from './middleware/serverProxy'
import handle from './helpers/handle'
import install from './helpers/install'
import Application from '../client/application/application'
import rootReducer from '../store/rootReducer'

const server = express()

const { env: { PORT, NODE_ENV, BUILD_FOLDER } } = process
const isProduction = NODE_ENV === 'production'
const compiler = webpack(config)

const middlewareList = [
  dataCaching(),
  application({ Application, rootReducer, BUILD_FOLDER }),
  isProduction && compression(),
  isProduction && staticAsset({ BUILD_FOLDER }),
  !isProduction && development({ compiler }),
  !isProduction && modulesLoad({ compiler }),
  serverProxy({ target: 'http://localhost:3001' })
]

middlewareList
  .filter(identity)
  .map(install(server))

const options = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}

httpServer
  .createServer(options, server)
  .listen(PORT, handle(process, 'http'))
