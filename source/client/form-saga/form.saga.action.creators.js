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

const fetchSagaDataSuccess = (data) => {
  const action = {
    type: FETCH_SAGA_DATA_SUCCESS,
    payload: data
  }
  return action
}

const fetchSagaDataFailure = (error) => {
  const action = {
    type: FETCH_SAGA_DATA_FAILURE,
    payload: error
  }
  return action
}

export {
  fetchSagaDataRequest,
  fetchSagaDataSuccess,
  fetchSagaDataFailure
}
