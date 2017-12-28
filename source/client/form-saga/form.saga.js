import { call, put } from 'redux-saga/effects'

import { hasData } from './form.saga.action'

function* getDataSaga(action) {
  try {
    const getData = (url) => fetch(url).then((data) => data.json())
    const { payload } = action
    const json = yield call(getData, payload)
    yield put(hasData(json.name))
  } catch (error) {
    yield put(hasData(error.toString()))
  }
}

export default getDataSaga
