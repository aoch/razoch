import fetch from '../../helpers/fetch'

import {
  FETCH_THUNK_DATA_REQUEST,
  FETCH_THUNK_DATA_SUCCESS,
  FETCH_THUNK_DATA_FAILURE
} from './form.thunk.action.types'

const fetchThunkDataFailure = (fail) => {
  const action = {
    type: FETCH_THUNK_DATA_FAILURE,
    payload: fail
  }
  return action
}

const fetchThunkDataSuccess = (pass) => {
  const action = {
    type: FETCH_THUNK_DATA_SUCCESS,
    payload: pass
  }
  return action
}


const fetchThunkDataRequest = (url) => (dispatch) => {
  const action = {
    type: FETCH_THUNK_DATA_REQUEST,
    payload: ''
  }
  dispatch(action)
  return fetch(url)
    .then(({ name }) => dispatch(fetchThunkDataSuccess(name)))
    .catch((error) => dispatch(fetchThunkDataFailure(error.toString())))
}

export {
  fetchThunkDataFailure,
  fetchThunkDataSuccess,
  fetchThunkDataRequest
}
