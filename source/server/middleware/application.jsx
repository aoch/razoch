import fs from 'fs'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'

import logger from '../helpers/logger'

const getData = (store) => ({ route }) => {
  const { loadData = () => Promise.resolve(true) } = route
  // console.error(loadData.toString())
  const promise = loadData(store)
  // console.error(promise)
  return promise
}

const application = (props) => ({
  urlPattern: '*',
  methodName: 'get',
  invocation: (request, response) => {
    logger.info(`[application.middleware] ${request.path}`)

    const { Routes, rootReducer, BUILD_FOLDER } = props
    const store = createStore(rootReducer)
    const { path } = request
    const dataList = matchRoutes(Routes, path).map(getData(store))

    Promise
      .all(dataList)
      .then(() => {
        const context = {}
        const jsx = (
          <Provider store={store}>
            <StaticRouter context={context} location={path}>
              {renderRoutes(Routes)}
            </StaticRouter>
          </Provider>
        )
        const realContent = renderToString(jsx)
        const placeholder = '<Razoch />'
        const pathToFile = `${BUILD_FOLDER}/client/client.html`
        const template = fs.readFileSync(pathToFile, 'utf-8').toString()
        const data = template.replace(placeholder, realContent)
        response.send(data)
      })
  }
})

export default application
