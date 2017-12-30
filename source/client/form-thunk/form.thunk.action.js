const FETCH_THUNK_DATA_REQUEST = 'FETCH_THUNK_DATA_REQUEST'
const FETCH_THUNK_DATA_SUCCESS = 'FETCH_THUNK_DATA_SUCCESS'
const FETCH_THUNK_DATA_FAILURE = 'FETCH_THUNK_DATA_FAILURE'

const fetchThunkDataSuccess = (data) => {
  const action = {
    type: FETCH_THUNK_DATA_SUCCESS,
    payload: data
  }
  return action
}

const fetchThunkDataFailure = (error) => {
  const action = {
    type: FETCH_THUNK_DATA_FAILURE,
    payload: error
  }
  return action
}

const fetchThunkDataRequest = (url) => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then(({ name, detail }) => dispatch(fetchThunkDataSuccess(name || detail)))
    .catch((error) => dispatch(fetchThunkDataFailure(error.toString())))
}

const actionTypes = {
  FETCH_THUNK_DATA_REQUEST,
  FETCH_THUNK_DATA_SUCCESS,
  FETCH_THUNK_DATA_FAILURE
}

const actionCreators = {
  fetchThunkDataRequest,
  fetchThunkDataSuccess,
  fetchThunkDataFailure
}

export {
  actionTypes,
  actionCreators
}
