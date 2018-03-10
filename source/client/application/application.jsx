import React, { Fragment } from 'react'

import FormThunk from '../form-thunk/form.thunk.container'
import FormEpic from '../form-epic/form.epic.container'
import FormSaga from '../form-saga/form.saga.container'

export default () => (
  <Fragment>
    <FormThunk />
    <FormEpic />
    <FormSaga />
  </Fragment>
)
