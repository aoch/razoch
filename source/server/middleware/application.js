import fs from 'fs'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import Application from '../../client/application/application'
import rootReducer from '../../store/rootReducer'

const { env: { BUILD_FOLDER } } = process

export default {
  urlPattern: '/',
  methodName: 'get',
  middleware: (request, response) => {
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
}
