import fs from 'fs'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

export default ({ Application, rootReducer, BUILD_FOLDER }) => ({
  urlPattern: '/',
  methodName: 'get',
  invocation: (request, response) => {
    const store = createStore(rootReducer)
    const jsx = (
      <Provider store={store}>
        <Application />
      </Provider>
    )
    const indexFile = `${BUILD_FOLDER}/client/index.html`
    const template = fs.readFileSync(indexFile, 'utf-8').toString()
    const realContent = renderToString(jsx)
    const placeholder = '<=% preloadedApplication %>'
    const data = template.replace(placeholder, realContent)
    response.send(data)
  }
})
