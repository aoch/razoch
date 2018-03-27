import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'

import buildStore from '../../store/buildStore'

import always from '../../helpers/always'
import logger from '../../helpers/logger'

const loadUpData = (store, props, request) => {
  const { Routes } = props
  const { path } = request
  const promiseList = matchRoutes(Routes, path).map(({ route }) => {
    const { loadData = always(true) } = route
    const promise = loadData(store, request)
    return promise
  })
  return promiseList
}

const renderData = (store, props, request) => {
  const context = {}
  const jsx = (
    <Provider store={store}>
      <StaticRouter context={context} location={request.path}>
        {renderRoutes(props.Routes)}
      </StaticRouter>
    </Provider>
  )
  const content = renderToString(jsx)
  return content
}

const updateData = (store, props, content) => {
  const { BUILD_FOLDER } = props
  const contentPlaceholder = 'CONTENT'
  const pathToFile = `${BUILD_FOLDER}/client/client.html`
  const template = fs.readFileSync(pathToFile, 'utf-8').toString()
  const statePlaceholder = 'STATE'
  const state = `window.STATE=${serialize(store.getState())}`
  const data = template
    .replace(contentPlaceholder, content)
    .replace(statePlaceholder, state)
  return data
}

const application = (props) => ({
  urlPattern: '*',
  methodName: 'get',
  invocation: async (request, response) => {
    logger.info(`[application.middleware] ${request.path}`)
    const store = buildStore(props.isProduction)
    await Promise.all(loadUpData(store, props, request))
    const initialData = renderData(store, props, request)
    const updatedData = updateData(store, props, initialData)
    response.send(updatedData)
  }
})

export default application
