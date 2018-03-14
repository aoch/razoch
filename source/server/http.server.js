import fs from 'fs'
import express from 'express'
import webpack from 'webpack'
import httpServer from 'spdy'
import { identity } from 'ramda'

import dataCaching from './middleware/dataCaching'
import application from './middleware/application'
import compression from './middleware/compression'
import staticAsset from './middleware/staticAsset'
import development from './middleware/development'
import modulesLoad from './middleware/modulesLoad'
import serverProxy from './middleware/serverProxy'

import handle from './helpers/handle'
import install from './helpers/install'

const server = express()

const { env: { NODE_ENV, BUILD_FOLDER, PORT } } = process
const isProduction = (NODE_ENV === 'production')

const context = {
  Application: require('../client/application/application').default, // eslint-disable-line
  rootReducer: require('../store/rootReducer').default, // eslint-disable-line
  BUILD_FOLDER,
  compiler: webpack(require('../../configs/webpack/development.client.babel').default), // eslint-disable-line
  target: 'http://localhost:3001'
}

const middlewareList = [
  dataCaching,
  application,
  isProduction && compression,
  isProduction && staticAsset,
  !isProduction && development,
  !isProduction && modulesLoad,
  serverProxy
]

middlewareList
  .filter(identity)
  .map(install(server, context))

const options = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}

httpServer
  .createServer(options, server)
  .listen(PORT, handle(process, 'http'))
