import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

import reducer from './reducer'
import Clock from './clock/clock.container'
import Input from './input/input.container'
import FormThunk from './form-thunk/form.thunk.container'
import FormPromise from './form-promise/form.promise.container'

const state = { time: '', value: '', thunkData: '', promiseData: '' }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const middleware = composeEnhancers(applyMiddleware(reduxPromise, thunk))
const store = createStore(reducer, state, middleware)
const domNode = document.querySelector('main')
const element = (
  <Provider store={store} >
    <Fragment>
      <Clock timezone={3} />
      <Input />
      <FormThunk />
      <FormPromise />
    </Fragment>
  </Provider>
)

ReactDOM.render(element, domNode)
