import { takeLatest } from 'redux-saga/effects'
import { FETCH_SAGA_DATA_REQUEST } from '../client/form-saga/form.saga.action.types'
import getDataSaga from '../client/form-saga/form.saga'

function* rootSaga() {
  yield takeLatest(FETCH_SAGA_DATA_REQUEST, getDataSaga)
}

export default rootSaga
