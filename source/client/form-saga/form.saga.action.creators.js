import {
  FETCH_SAGA_DATA_REQUEST,
  FETCH_SAGA_DATA_SUCCESS,
  FETCH_SAGA_DATA_FAILURE
} from './form.saga.action.types'

const fetchSagaDataRequest = (data) => {
  const action = {
    type: FETCH_SAGA_DATA_REQUEST,
    payload: data
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

const fetchSagaDataFailure = (fail) => {
  const action = {
    type: FETCH_SAGA_DATA_FAILURE,
    payload: fail
  }
  return action
}

export {
  fetchSagaDataRequest,
  fetchSagaDataSuccess,
  fetchSagaDataFailure
}
