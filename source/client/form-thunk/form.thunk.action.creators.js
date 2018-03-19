import 'isomorphic-fetch'

import {
  FETCH_THUNK_DATA_REQUEST,
  FETCH_THUNK_DATA_SUCCESS,
  FETCH_THUNK_DATA_FAILURE
} from './form.thunk.action.types'

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
  const action = {
    type: FETCH_THUNK_DATA_REQUEST,
    payload: ''
  }
  dispatch(action)
  fetch(url)
    .then((response) => response.json())
    .then(({ name }) => dispatch(fetchThunkDataSuccess(name)))
    .catch((error) => dispatch(fetchThunkDataFailure(error.toString())))
}

export {
  fetchThunkDataRequest,
  fetchThunkDataSuccess,
  fetchThunkDataFailure
}
