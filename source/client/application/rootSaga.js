import { takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../form-saga/form.saga.action'
import getDataSaga from '../form-saga/form.saga'

function* rootSaga() {
  const { FETCH_SAGA_DATA_REQUEST } = actionTypes
  yield takeLatest(FETCH_SAGA_DATA_REQUEST, getDataSaga)
}

export default rootSaga
