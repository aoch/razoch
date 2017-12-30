const FETCH_EPIC_DATA_REQUEST = 'FETCH_EPIC_DATA_REQUEST'
const FETCH_EPIC_DATA_SUCCESS = 'FETCH_EPIC_DATA_SUCCESS'
const FETCH_EPIC_DATA_FAILURE = 'FETCH_EPIC_DATA_FAILURE'

const fetchEpicDataRequest = (url) => {
  const action = {
    type: FETCH_EPIC_DATA_REQUEST,
    payload: url
  }
  return action
}

const fetchEpicDataSuccess = (data) => {
  const action = {
    type: FETCH_EPIC_DATA_SUCCESS,
    payload: data
  }
  return action
}

const fetchEpicDataFailure = (error) => {
  const action = {
    type: FETCH_EPIC_DATA_FAILURE,
    payload: error
  }
  return action
}

const actionTypes = {
  FETCH_EPIC_DATA_REQUEST,
  FETCH_EPIC_DATA_SUCCESS,
  FETCH_EPIC_DATA_FAILURE
}

const actionCreators = {
  fetchEpicDataRequest,
  fetchEpicDataSuccess,
  fetchEpicDataFailure
}

export {
  actionTypes,
  actionCreators
}
