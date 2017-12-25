import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { createEpicMiddleware } from 'redux-observable'

import reducer from './reducer'
import epic from './epic'
import Input from './input/input.container'
import Clock from './clock/clock.container'
import Form from './form/form.container'

const state = { time: '', value: '', data: '' }
const middleware = applyMiddleware(createEpicMiddleware(epic))
const store = createStore(reducer, state, middleware)
const domNode = document.querySelector('main')
const element = (
  <Provider store={store} >
    <Fragment>
      <Input />
      <Clock />
      <Form />
    </Fragment>
  </Provider>
)

ReactDOM.render(element, domNode)
