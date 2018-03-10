import apicache from 'apicache'
import express from 'express'
import fs from 'fs'
import httpServer from 'spdy'
import proxyMiddleware from 'http-proxy-middleware'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Application from '../client/application/application'
import callback from './helpers/callback'
import { devMiddleware, hotMiddleware } from './middleware/hotReload'
import gzipMiddleware from './middleware/gzipAsset'
import rootReducer from '../store/rootReducer'

const server = express()

const { env: { PORT, BUILD_FOLDER, NODE_ENV } } = process

const cache = apicache.middleware
server.use(cache('24 hours'))

const handler = (request, response) => {
  const store = createStore(rootReducer)
  const jsx = (
    <Provider store={store}>
      <Application />
    </Provider>
  )
  const realContent = renderToString(jsx)
  const placeholder = '<=% preloadedApplication %>'
  const indexFile = `${BUILD_FOLDER}/client/index.html`
  const template = fs.readFileSync(indexFile, 'utf-8').toString()
  const data = template.replace(placeholder, realContent)
  response.send(data)
}
const path = '/'
server.get(path, handler)

const isProduction = NODE_ENV === 'production'
if (isProduction) {
  server.get('*.js', gzipMiddleware)
  server.use(express.static(`${BUILD_FOLDER}/client`))
} else {
  server.use(devMiddleware)
  server.use(hotMiddleware)
}

const proxyPath = '/api/people/:id'
const proxyData = { target: 'http://localhost:3001' }
server.use(proxyPath, proxyMiddleware(proxyData))

const options = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}
httpServer
  .createServer(options, server)
  .listen(PORT, callback(process, 'http'))
