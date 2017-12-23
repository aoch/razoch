import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducer from './reducer'
import Input from './input/input.container'
import Clock from './clock/clock.container'

const state = { time: '', value: '' }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const middleware = composeEnhancers(applyMiddleware(logger))
const store = createStore(reducer, state, middleware)
const domNode = document.querySelector('main')
const element = (
  <Provider store={store} >
    <Fragment>
      <Input />
      <Clock />
    </Fragment>
  </Provider>
)

ReactDOM.render(element, domNode)
