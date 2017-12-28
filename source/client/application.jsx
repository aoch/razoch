import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'

import epic from './epic'
import reducer from './reducer'
import Clock from './clock/clock.container'
import Input from './input/input.container'
import FormThunk from './form-thunk/form.thunk.container'
import FormPromise from './form-promise/form.promise.container'
import FormObservable from './form-observable/form.observable.container'

const state = {
  time: '',
  value: '',
  thunkData: '',
  promiseData: '',
  observableData: ''
}
const epicMiddleware = createEpicMiddleware(epic)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const middleware = composeEnhancers(applyMiddleware(reduxPromise, thunk, epicMiddleware))
const store = createStore(reducer, state, middleware)
const domNode = document.querySelector('main')
const element = (
  <Provider store={store} >
    <Fragment>
      <Clock />
      <Input />
      <FormThunk />
      <FormPromise />
      <FormObservable />
    </Fragment>
  </Provider>
)

ReactDOM.render(element, domNode)
