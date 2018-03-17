import fs from 'fs'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import logger from '../helpers/logger'

const application = (props) => ({
  urlPattern: '*',
  methodName: 'get',
  invocation: (request, response) => {
    logger.debug(`[application.middleware] ${request.path}`)
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
    const pathToFile = `${BUILD_FOLDER}/client/client.html`
    const template = fs.readFileSync(pathToFile, 'utf-8').toString()
    const data = template.replace(placeholder, realContent)
    response.send(data)
  }
})

export default application


/*
// SSR
error: [application.middleware] /

error: [staticAsset.middleware] /
error: [staticAsset.middleware] /client.css
error: [staticAsset.middleware] /client.css.map
error: [staticAsset.middleware] /icons-1b5c97b15b001e6e19d616a392a7d56c/favicon-32x32.png
error: [staticAsset.middleware] /icons-1b5c97b15b001e6e19d616a392a7d56c/favicon-16x16.png
*/

/*
// CSR
error: [application.middleware] /
error: [application.middleware] /__webpack_hmr


error: [staticAsset.middleware] /
error: [staticAsset.middleware] /client.css
error: [staticAsset.middleware] /client.js
error: [staticAsset.middleware] /vendor.js
error: [staticAsset.middleware] /__webpack_hmr
error: [staticAsset.middleware] /client.js.map
error: [staticAsset.middleware] /client.css.map
error: [staticAsset.middleware] /vendor.js.map
error: [staticAsset.middleware] /icons-1b5c97b15b001e6e19d616a392a7d56c/favicon-32x32.png
error: [staticAsset.middleware] /icons-1b5c97b15b001e6e19d616a392a7d56c/favicon-16x16.png
*/

