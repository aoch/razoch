import apicache from 'apicache'
import express from 'express'
import fs from 'fs'
import httpServer from 'spdy'
import proxyMiddleware from 'http-proxy-middleware'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import Application from '../client/application/application'
import callback from './helpers/callback'
import { devMiddleware, hotMiddleware } from './middleware/hotReload'
import gzipMiddleware from './middleware/gzipAsset'
import buildStore from '../store/buildStore'
import logger from './helpers/logger'

const server = express()

const { env: { PORT, BUILD_FOLDER, NODE_ENV } } = process
const isProduction = NODE_ENV === 'production'

const cache = apicache.middleware
server.use(cache('24 hours'))

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

const indexPath = '*'
const processor = (request, response) => {
  const indexFile = `${BUILD_FOLDER}/client/index.html`

  const initialState = {}
  const window = undefined
  const store = buildStore(isProduction, initialState, window)
  store.dispatch({ type: 'FETCH_SAGA_DATA_REQUEST' })
  store.dispatch({ type: 'FETCH_EPIC_DATA_REQUEST' })
  store.dispatch({ type: 'FETCH_THUNK_DATA_REQUEST' })
  const template = fs.readFileSync(indexFile, 'utf-8').toString()
  const placeholder = '<=% preloadedApplication %>'
  const jsx = (
    <Provider store={store}>
      <Application />
    </Provider>
  )
  const realContent = renderToString(jsx)
  const data = template.replace(placeholder, realContent)
  logger.debug(`[xxxx] state is ${JSON.stringify(store.getState(), null, 4)}`)
  logger.debug(`[xxxx] data is  ${JSON.stringify(data)}`)
  response.send(data)
}
server.get(indexPath, processor)

const options = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}
httpServer
  .createServer(options, server)
  .listen(PORT, callback(process, 'http'))
