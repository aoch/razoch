import fs from 'fs'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export default ({ Routes, rootReducer, BUILD_FOLDER }) => ({
  urlPattern: '/',
  methodName: 'get',
  invocation: (request, response) => {
    const store = createStore(rootReducer)
    const { path } = request
    const context = {}
    const jsx = (
      <Provider store={store}>
        <StaticRouter location={path} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>
    )
    const realContent = renderToString(jsx)
    const placeholder = '<=% preloadedApplication %>'
    const pathToFile = `${BUILD_FOLDER}/client/index.html`
    const template = fs.readFileSync(pathToFile, 'utf-8').toString()
    const data = template.replace(placeholder, realContent)
    response.send(data)
  }
})
