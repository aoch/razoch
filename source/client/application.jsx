import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import Form from './form/form.container'
import Input from './input/input.container'
import Clock from './clock/clock.container'
import reducer from './reducer'

const state = { time: '', value: '', text: '' }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const store = createStore(reducer, state, composeEnhancers(applyMiddleware(thunk)))
const domNode = document.querySelector('main')
const element = (
  <Provider store={store} >
    <Fragment>
      <Form />
      <Input />
      <Clock />
    </Fragment>
  </Provider>
)

ReactDOM.hydrate(element, domNode)
