import express from 'express'
import http2Server from 'spdy'
import webpack from 'webpack'
import fs from 'fs'
import buildDevMiddleware from 'webpack-dev-middleware'
import buildHotMiddleware from 'webpack-hot-middleware'
import winston from 'winston'

import configList from '../../configs/webpack.dev.babel'

const httpServer = express()

const clientFolder = `${process.env.BUILD_FOLDER}/client`
const isProduction = (process.env.NODE_ENV === 'production')
if (isProduction) {
  httpServer.use(express.static(clientFolder))
} else {
  const config = configList[0]
  const compiler = webpack(config)
  const devMiddleware = buildDevMiddleware(compiler, { noInfo: true })
  const hotMiddleware = buildHotMiddleware(compiler)
  httpServer.use(devMiddleware)
  httpServer.use(hotMiddleware)
}

const indexFile = `${clientFolder}/index.html`
httpServer.get('*', (request, response) => response.sendFile(indexFile))

const {
  IP = 'https://localhost',
  PORT = 3000,
  NODE_ENV
} = process.env

const callback = (error) => {
  const [level, message] = error
    ? ['error', error.toString()]
    : ['info', `[${NODE_ENV}] Server listening on ${IP}:${PORT}`]
  winston.log(level, message)
}

const httpsOptions = {
  key: fs.readFileSync('./configs/server.key'),
  cert: fs.readFileSync('./configs/server.crt'),
}

http2Server
  .createServer(httpsOptions, httpServer)
  .listen(PORT, callback)
