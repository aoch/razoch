import fs from 'fs'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

const application = (props) => ({
  urlPattern: '/',
  methodName: 'get',
  invocation: (request, response) => {
    const { Routes, rootReducer, BUILD_FOLDER } = props
    const store = createStore(rootReducer)
    const context = {}
    const location = request.path
    const jsx = (
      <Provider store={store}>
        <StaticRouter context={context} location={location}>
          <Routes />
        </StaticRouter>
      </Provider>
    )
    const realContent = renderToString(jsx)
    const placeholder = '<Razoch />'
    const pathToFile = `${BUILD_FOLDER}/client/index.html`
    const template = fs.readFileSync(pathToFile, 'utf-8').toString()
    const data = template.replace(placeholder, realContent)
    response.send(data)
  }
})

export default application
