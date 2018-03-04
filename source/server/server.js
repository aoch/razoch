import express from 'express'
import http2Server from 'spdy'
import webpack from 'webpack'
import fs from 'fs'
import buildDevMiddleware from 'webpack-dev-middleware'
import buildHotMiddleware from 'webpack-hot-middleware'
import winston from 'winston'
import fetch from 'isomorphic-fetch'

import configList from '../../configs/webpack/dev.babel'

const clientFolder = `${process.env.BUILD_FOLDER}/client`
const isProduction = (process.env.NODE_ENV === 'production')

const httpServer = express()

if (isProduction) {
  const gzipMiddleware = (request, response, next) => {
    request.url += '.gz'
    response.set('Content-Encoding', 'gzip')
    next()
  }
  httpServer.get('*.html', gzipMiddleware)
  httpServer.get('*.js', gzipMiddleware)
}

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

httpServer.get('/api/people/:id', (request, response) => {
  const { params: { id } } = request
  const endpoint = `https://swapi.co/api/people/${id}`
  const onValidate = (data) => {
    const { status, statusText } = data
    if (status < 200) throw Error(statusText)
    if (status > 299) throw Error(statusText)
    return data.json()
  }
  const onSuccess = (json) => response.send(json)
  const onFailure = (error) => response.status(400).send(error.toString())
  fetch(endpoint)
    .then(onValidate)
    .then(onSuccess)
    .catch(onFailure)
})

const indexFile = `${clientFolder}/index.html`
httpServer.get('/*', (request, response) => response.sendFile(indexFile))

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
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}

http2Server
  .createServer(httpsOptions, httpServer)
  .listen(PORT, callback)
