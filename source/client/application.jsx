import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import reducer from './reducer'
import Input from './input/input.container'
import Clock from './clock/clock.container'

const state = { time: '', value: '' }
const middleware = devToolsEnhancer()
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
