import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../routes/routes'
import buildStore from '../store/buildStore'
import './client.scss'

const isProduction = (process.env.NODE_ENV === 'production')
const store = buildStore(isProduction, {})

const render = (RouteList) => {
  const element = (
    <Provider store={store} >
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </Provider>
  )
  const domNode = document.querySelector('main')
  ReactDOM.hydrate(element, domNode)
}

render(Routes)

if (module.hot) {
  module.hot.accept('../routes/routes', () => {
    import('../routes/routes')
      .then((RouteList) => render(RouteList.default))
  })
}
