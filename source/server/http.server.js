import http2Server from 'spdy'
import fs from 'fs'

import express from 'express'
import proxyMiddleware from 'http-proxy-middleware'
import gzipMiddleware from './helpers/gzipAsset'
import { devMiddleware, hotMiddleware } from './helpers/hotReload'
import callback from './helpers/callback'

const {
  env: {
    PORT,
    BUILD_FOLDER,
    NODE_ENV
  }
} = process

const clientFolder = `${BUILD_FOLDER}/client`
const isProduction = (NODE_ENV === 'production')

const httpServer = express()

if (isProduction) {
  httpServer.get('*.html', gzipMiddleware)
  httpServer.get('*.js', gzipMiddleware)
  httpServer.use(express.static(clientFolder))
} else {
  httpServer.use(devMiddleware)
  httpServer.use(hotMiddleware)
}

const proxyOptions = { target: 'http://localhost:3001' }
httpServer.use('/api/people/:id', proxyMiddleware(proxyOptions))

const indexFile = `${clientFolder}/index.html`
httpServer.get('*', (request, response) => response.sendFile(indexFile))

const httpsOptions = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}

http2Server
  .createServer(httpsOptions, httpServer)
  .listen(PORT, callback(process, 'http'))
