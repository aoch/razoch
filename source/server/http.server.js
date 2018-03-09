import apicache from 'apicache'
import express from 'express'
import fs from 'fs'
import httpServer from 'spdy'
import proxyMiddleware from 'http-proxy-middleware'

import callback from './helpers/callback'
import { devMiddleware, hotMiddleware } from './middleware/hotReload'
import gzipMiddleware from './middleware/gzipAsset'

const server = express()

const { env: { PORT, BUILD_FOLDER, NODE_ENV } } = process

const cache = apicache.middleware
server.use(cache('24 hours'))

if (NODE_ENV === 'production') {
  server.get('*.js', gzipMiddleware)
  server.use(express.static(`${BUILD_FOLDER}/client`))
} else {
  server.use(devMiddleware)
  server.use(hotMiddleware)
}

const proxyPath = '/api/people/:id'
const proxyData = { target: 'http://localhost:3001' }
server.use(proxyPath, proxyMiddleware(proxyData))

const indexPath = '*'
const indexFile = `${BUILD_FOLDER}/client/index.html`
const processor = (request, response) => response.sendFile(indexFile)
server.get(indexPath, processor)

const options = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}
httpServer
  .createServer(options, server)
  .listen(PORT, callback(process, 'http'))
