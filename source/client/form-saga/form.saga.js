import 'isomorphic-fetch'
import { Agent } from 'https'

import {
  call,
  put
} from 'redux-saga/effects'

import {
  fetchSagaDataSuccess,
  fetchSagaDataFailure
} from './form.saga.action.creators'

function* getDataSaga(action) {
  try {
    const options = {
      agent: new Agent({ rejectUnauthorized: false }) // Only needed for self-signed certificates
    }
    const getData = (url) => fetch(url, options).then((data) => data.json())
    const { payload } = action
    const json = yield call(getData, payload)
    const { name } = json
    yield put(fetchSagaDataSuccess(name))
  } catch (error) {
    yield put(fetchSagaDataFailure(error.toString()))
  }
}

export default getDataSaga
