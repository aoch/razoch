import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import buildStore from './buildStore'

import Clock from '../clock/clock.container'
import Input from '../input/input.container'
import FormThunk from '../form-thunk/form.thunk.container'
import FormEpic from '../form-epic/form.epic.container'
import FormSaga from '../form-saga/form.saga.container'

const isProduction = (process.env.NODE_ENV === 'production')
const store = buildStore(isProduction)

const element = (
  <Provider store={store} >
    <Fragment>
      <Clock />
      <Input />
      <FormThunk />
      <FormEpic />
      <FormSaga />
    </Fragment>
  </Provider>
)

const domNode = document.querySelector('main')

ReactDOM.hydrate(element, domNode)

