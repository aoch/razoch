import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './reducer'
import Clock from './clock/clock.container'
import Form from './form/form.container'
import Input from './input/input.container'
import Panel from './panel/panel.container'

const state = { time: '', value: '' }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const middleware = composeEnhancers(applyMiddleware(logger, reduxPromise, thunk))
const store = createStore(reducer, state, middleware)
const domNode = document.querySelector('main')
const element = (
  <Provider store={store} >
    <Fragment>
      <Clock timezone={3} />
      <Input />
      <Form />
      <Panel />
    </Fragment>
  </Provider>
)

ReactDOM.render(element, domNode)
