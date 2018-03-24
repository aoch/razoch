import {
  FETCH_EPIC_DATA_REQUEST,
  FETCH_EPIC_DATA_SUCCESS,
  FETCH_EPIC_DATA_FAILURE
} from './form.epic.action.types'

const fetchEpicDataFailure = (fail) => {
  const action = {
    type: FETCH_EPIC_DATA_FAILURE,
    payload: fail
  }
  return action
}

const fetchEpicDataSuccess = (pass) => {
  const action = {
    type: FETCH_EPIC_DATA_SUCCESS,
    payload: pass
  }
  return action
}

const fetchEpicDataRequest = (url) => {
  const action = {
    type: FETCH_EPIC_DATA_REQUEST,
    payload: url
  }
  return action
}

export {
  fetchEpicDataFailure,
  fetchEpicDataSuccess,
  fetchEpicDataRequest
}
