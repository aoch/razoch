import express from 'express'
import http2Server from 'spdy'
import webpack from 'webpack'
import fs from 'fs'
import buildDevMiddleware from 'webpack-dev-middleware'
import buildHotMiddleware from 'webpack-hot-middleware'

import configList from '../../webpack/webpack.dev.babel'

const config = configList[0]
const compiler = webpack(config)
const devMiddleware = buildDevMiddleware(compiler, { noInfo: true })
const hotMiddleware = buildHotMiddleware(compiler)

// Tell Express to create a basic HTTP server
const httpServer = express()

// Tell Express how to serve assets to clients (webpack middleware or file system)
const clientFolder = `${process.env.BUILD_FOLDER}/client`
const inDevelopmentMode = (process.env.NODE_ENV === 'development')
if (inDevelopmentMode) {
  httpServer.use(devMiddleware)
  httpServer.use(hotMiddleware)
} else {
  httpServer.use(express.static(clientFolder))
}

// Tell Express to redirect all requests back to the index file
const indexFile = `${clientFolder}/index.html`
httpServer.get('*', (request, response) => response.sendFile(indexFile))

// Pull off environment variable values passed in to this process using object destructuring
const {
  IP = 'https://localhost',
  PORT = 3000
} = process.env

const callback = (error) => {
  const message = error || `Todo Server listening on ${IP}:${PORT}`
  console.log(message)  // eslint-disable-line
}

// Define credentials needed to support using HTTPS on this server
const httpsOptions = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
}

// Start up an HTTP2/HTTPS server to serve the Todo application
http2Server
  .createServer(httpsOptions, httpServer)
  .listen(PORT, callback)
