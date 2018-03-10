import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Application from './application/application'
import buildStore from '../store/buildStore'
import './client.scss'

const isProduction = (process.env.NODE_ENV === 'production')
const store = buildStore(isProduction, {}, window)

const render = (App) => {
  const element = (
    <Provider store={store} >
      <App />
    </Provider>
  )
  const domNode = document.querySelector('main')
  ReactDOM.render(element, domNode)
}

render(Application)

if (module.hot) {
  module.hot.accept('./application/application', () => {
    import('./application/application')
      .then((App) => render(App.default))
  })
}
