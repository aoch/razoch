import express from 'express'

import gzipMiddleware from './middleware/gzipAsset'
import { devMiddleware, hotMiddleware } from './middleware/hotReload'

const clientFolder = `${process.env.BUILD_FOLDER}/client`
const isProduction = (process.env.NODE_ENV === 'production')

const httpServer = express()

if (isProduction) {
  httpServer.get('*.html', gzipMiddleware)
  httpServer.get('*.js', gzipMiddleware)
  httpServer.use(express.static(clientFolder))
} else {
  httpServer.use(devMiddleware)
  httpServer.use(hotMiddleware)
}

const indexFile = `${clientFolder}/index.html`
httpServer.get('*', (request, response) => response.sendFile(indexFile))

export default httpServer
