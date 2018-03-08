import http2Server from 'spdy'
import fs from 'fs'
import winston from 'winston'
import chalk from 'chalk'

import express from 'express'
import proxyMiddleware from 'http-proxy-middleware'
import gzipMiddleware from './middleware/gzipAsset'
import { devMiddleware, hotMiddleware } from './middleware/hotReload'

const {
  IP = 'https://localhost',
  PORT = 3000,
  BUILD_FOLDER,
  NODE_ENV
} = process.env

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

const callback = (error) => {
  const [level, message, decorate] = error
    ? ['error', error.toString(), chalk.redBright]
    : ['info', `[${NODE_ENV}] web server running on ${IP}:${PORT}`, chalk.yellowBright]

  const divider = '-'.repeat(120)
  winston.log(level, decorate(divider))
  winston.log(level, decorate(message))
  winston.log(level, decorate(divider))
}

const httpsOptions = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}

http2Server
  .createServer(httpsOptions, httpServer)
  .listen(PORT, callback)
