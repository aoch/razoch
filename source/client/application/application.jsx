import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from './rootEpic'
import rootReducer from './rootReducer'
import Clock from '../clock/clock.container'
import Input from '../input/input.container'
import FormThunk from '../form-thunk/form.thunk.container'
import FormPromise from '../form-promise/form.promise.container'
import FormEpic from '../form-epic/form.epic.container'

const initialState = {
  time: '',
  value: '',
  thunkData: '',
  promiseData: '',
  epicData: ''
}

const epicMiddleware = createEpicMiddleware(rootEpic)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const middlewareList = [thunkMiddleware, promiseMiddleware, epicMiddleware]
const middleware = composeEnhancers(applyMiddleware(...middlewareList))
const store = createStore(rootReducer, initialState, middleware)
const domNode = document.querySelector('main')
const element = (
  <Provider store={store} >
    <Fragment>
      <Clock />
      <Input />
      <FormThunk />
      <FormPromise />
      <FormEpic />
    </Fragment>
  </Provider>
)

ReactDOM.render(element, domNode)
