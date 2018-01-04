import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import buildStore from './buildStore'

import Clock from '../clock/clock.container'
import Input from '../input/input.container'
import FormThunk from '../form-thunk/form.thunk.container'
import FormEpic from '../form-epic/form.epic.container'
import FormSaga from '../form-saga/form.saga.container'

const element = (
  <Provider store={buildStore()} >
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

ReactDOM.render(element, domNode)

