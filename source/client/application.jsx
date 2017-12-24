import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'

import reducer from './reducer'
import Input from './input/input.container'
import Clock from './clock/clock.container'
import Panel from './panel/panel.container'

const state = { time: '', value: '', text: '' }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const middleware = composeEnhancers(applyMiddleware(reduxPromise))
const store = createStore(reducer, state, middleware)
const domNode = document.querySelector('main')
const element = (
  <Provider store={store} >
    <Fragment>
      <Input />
      <Clock />
      <Panel />
    </Fragment>
  </Provider>
)

ReactDOM.render(element, domNode)
