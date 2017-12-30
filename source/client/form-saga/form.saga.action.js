const FETCH_SAGA_DATA_REQUEST = 'FETCH_SAGA_DATA_REQUEST'
const FETCH_SAGA_DATA_SUCCESS = 'FETCH_SAGA_DATA_SUCCESS'
const FETCH_SAGA_DATA_FAILURE = 'FETCH_SAGA_DATA_FAILURE'

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

const actionTypes = {
  FETCH_SAGA_DATA_REQUEST,
  FETCH_SAGA_DATA_SUCCESS,
  FETCH_SAGA_DATA_FAILURE
}

const actionCreators = {
  fetchSagaDataRequest,
  fetchSagaDataSuccess,
  fetchSagaDataFailure
}

export {
  actionTypes,
  actionCreators
}
