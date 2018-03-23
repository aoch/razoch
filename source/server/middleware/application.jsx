import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import buildStore from '../../store/buildStore'

import logger from '../helpers/logger'

const getData = (store, request) => ({ route }) => {
  const { loadData = () => Promise.resolve(true) } = route
  const promise = loadData(store, request)
  return promise
}

const application = (props) => ({
  urlPattern: '*',
  methodName: 'get',
  invocation: (request, response) => {
    logger.info(`[application.middleware] ${request.path}`)

    const { Routes, isProduction, BUILD_FOLDER } = props
    const store = buildStore(isProduction)
    const { path } = request
    const dataList = matchRoutes(Routes, path).map(getData(store, request))
    const handler = () => {
      const context = {}
      const jsx = (
        <Provider store={store}>
          <StaticRouter context={context} location={path}>
            {renderRoutes(Routes)}
          </StaticRouter>
        </Provider>
      )
      const content = renderToString(jsx)
      const contentPlaceholder = 'CONTENT'
      const pathToFile = `${BUILD_FOLDER}/client/client.html`
      const template = fs.readFileSync(pathToFile, 'utf-8').toString()
      const statePlaceholder = 'STATE'
      const state = `window.STATE=${JSON.stringify(store.getState())}`
      const data = template
        .replace(contentPlaceholder, content)
        .replace(statePlaceholder, state)
      response.send(data)
    }
    // ToDo: We need to not fail-fast (Instead we
    // should wait for all promises to reject/resolve)
    Promise
      .all(dataList)
      .then(handler)
      .catch(handler)
  }
})

export default application
