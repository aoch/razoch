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
import handle from '../helpers/handle'
import install from '../helpers/install'
import Routes from '../routes/Routes'
import rootReducer from '../store/rootReducer'

const server = express()

const {
  env: {
    PROXY_IP,
    PROXY_PORT,
    PORT,
    NODE_ENV,
    BUILD_FOLDER,
    HTTPS_KEY,
    HTTPS_CRT
  }
} = process

const isProduction = (NODE_ENV === 'production')
const target = `${PROXY_IP}:${PROXY_PORT}`
const hotOptions = { compiler: webpack(config) }

const middlewareList = [
  serverProxy({ target }),
  isProduction ? dataCaching() : idempotent(),
  isProduction ? idempotent() : development(hotOptions),
  isProduction ? idempotent() : modulesLoad(hotOptions),
  isProduction ? compression() : idempotent(),
  staticAsset({ BUILD_FOLDER }),
  application({ Routes, isProduction, rootReducer, BUILD_FOLDER }),
]

middlewareList
  .map(install(server))

const options = {
  key: fs.readFileSync(HTTPS_KEY),
  cert: fs.readFileSync(HTTPS_CRT),
}

httpServer
  .createServer(options, server)
  .listen(PORT, handle(process, 'http'))
