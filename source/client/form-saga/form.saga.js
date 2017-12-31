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
    const getData = (url) => fetch(url).then((data) => data.json())
    const { payload } = action
    const json = yield call(getData, payload)
    const { name, detail } = json
    yield put(fetchSagaDataSuccess(name || detail))
  } catch (error) {
    yield put(fetchSagaDataFailure(error.toString()))
  }
}

export default getDataSaga
