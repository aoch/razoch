import React, { Fragment } from 'react'

import ClockContainer from '../clock/clock.container'
import InputContainer from '../input/input.container'
import { FormThunkContainer, FormThunkRoute } from '../form-thunk/form.thunk.container'
import { FormEpicContainer, FormEpicRoute } from '../form-epic/form.epic.container'
import { FormSagaContainer, FormSagaRoute } from '../form-saga/form.saga.container'

const Application = () => (
  <Fragment>
    <ClockContainer />
    <InputContainer />
    <FormThunkContainer />
    <FormEpicContainer />
    <FormSagaContainer />
  </Fragment>
)

const loadData = (store, request) => Promise.all([
  FormThunkRoute.loadData(store, request),
  FormEpicRoute.loadData(store, request),
  FormSagaRoute.loadData(store, request),
])

const ApplicationRoute = {
  component: Application,
  loadData
}

export { ApplicationRoute, Application }

