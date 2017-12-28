import { takeLatest } from 'redux-saga/effects'
import { GET_DATA_VIA_SAGA } from '../form-saga/form.saga.action'
import getDataSaga from '../form-saga/form.saga'

function* rootSaga() {
  yield takeLatest(GET_DATA_VIA_SAGA, getDataSaga)
}

export default rootSaga
