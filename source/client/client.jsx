import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import RouteList from '../routes/Routes'
import buildStore from '../store/buildStore'
import './client.scss'

const isProduction = (process.env.NODE_ENV === 'production')
const store = buildStore(isProduction, window.STATE)
window.STATE = undefined

const render = (Routes) => {
  const element = (
    <Provider store={store} >
      <BrowserRouter>
        {renderRoutes(Routes)}
      </BrowserRouter>
    </Provider>
  )
  const domNode = document.querySelector('main')
  ReactDOM.hydrate(element, domNode)
}

render(RouteList)

if (module.hot) {
  module.hot.accept('../routes/Routes', () => {
    import('../routes/Routes')
      .then((Routes) => render(Routes.default))
  })
}
