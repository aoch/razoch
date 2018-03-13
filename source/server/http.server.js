import express from 'express'
import fs from 'fs'
import httpServer from 'spdy'
import { identity } from 'ramda'


import dataCaching from './middleware/dataCaching'
import application from './middleware/application'
import compression from './middleware/compression'
import staticAsset from './middleware/staticAsset'
import serverProxy from './middleware/serverProxy'

import addMiddleware from './helpers/addMiddleware'
import callback from './helpers/callback'

import { devMiddleware, hotMiddleware } from './middleware/hotReload'

const server = express()

const { env: { PORT, NODE_ENV } } = process
const isProduction = NODE_ENV === 'production'

const middlewareList = [
  dataCaching,
  application,
  isProduction ? compression : null,
  isProduction ? staticAsset : null,
  serverProxy
].filter(identity)

middlewareList.forEach(addMiddleware(server))

if (!isProduction) {
  server.use(devMiddleware)
  server.use(hotMiddleware)
}

const options = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}

httpServer
  .createServer(options, server)
  .listen(PORT, callback(process, 'http'))
