import React, { Fragment } from 'react'

import Clock from '../clock/clock.container'
import Input from '../input/input.container'
import FormThunk from '../form-thunk/form.thunk.container'
import FormEpic from '../form-epic/form.epic.container'
import FormSaga from '../form-saga/form.saga.container'

export default () => (
  <Fragment>
    <Clock />
    <Input />
    <FormThunk />
    <FormEpic />
    <FormSaga />
  </Fragment>
)
