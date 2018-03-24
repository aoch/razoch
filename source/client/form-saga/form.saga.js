
import {
  call,
  put
} from 'redux-saga/effects'

import fetch from '../../helpers/fetch'
import {
  fetchSagaDataSuccess,
  fetchSagaDataFailure
} from './form.saga.action.creators'

function* getDataSaga(action) {
  try {
    const getData = (url) => fetch(url)
    const { payload } = action
    const json = yield call(getData, payload)
    const { name } = json
    yield put(fetchSagaDataSuccess(name))
  } catch (error) {
    yield put(fetchSagaDataFailure(error.toString()))
  }
}

export default getDataSaga
