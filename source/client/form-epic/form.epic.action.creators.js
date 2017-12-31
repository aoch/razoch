import {
  FETCH_EPIC_DATA_REQUEST,
  FETCH_EPIC_DATA_SUCCESS,
  FETCH_EPIC_DATA_FAILURE
} from './form.epic.action.types'

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

export {
  fetchEpicDataRequest,
  fetchEpicDataSuccess,
  fetchEpicDataFailure
}
