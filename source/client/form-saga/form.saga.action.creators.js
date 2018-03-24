import {
  FETCH_SAGA_DATA_REQUEST,
  FETCH_SAGA_DATA_SUCCESS,
  FETCH_SAGA_DATA_FAILURE
} from './form.saga.action.types'

const fetchSagaDataFailure = (fail) => {
  const action = {
    type: FETCH_SAGA_DATA_FAILURE,
    payload: fail
  }
  return action
}

const fetchSagaDataSuccess = (pass) => {
  const action = {
    type: FETCH_SAGA_DATA_SUCCESS,
    payload: pass
  }
  return action
}

const fetchSagaDataRequest = (url) => {
  const action = {
    type: FETCH_SAGA_DATA_REQUEST,
    payload: url
  }
  return action
}

export {
  fetchSagaDataFailure,
  fetchSagaDataSuccess,
  fetchSagaDataRequest
}
