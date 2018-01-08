import {
  FETCH_EPIC_SHOW_LOADING,
  FETCH_EPIC_DATA_REQUEST,
  FETCH_EPIC_KILL_REQUEST,
  FETCH_EPIC_DATA_SUCCESS,
  FETCH_EPIC_DATA_FAILURE,
  FETCH_EPIC_HIDE_LOADING
} from './form.epic.action.types'

const fetchEpicShowLoading = () => {
  const action = {
    type: FETCH_EPIC_SHOW_LOADING,
    payload: true
  }
  return action
}

const fetchEpicHideLoading = () => {
  const action = {
    type: FETCH_EPIC_HIDE_LOADING,
    payload: false
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

const fetchEpicKillRequest = (reason) => {
  const action = {
    type: FETCH_EPIC_KILL_REQUEST,
    payload: reason
  }
  return action
}

const fetchEpicDataSuccess = (data) => {
  const action = {
    type: FETCH_EPIC_DATA_SUCCESS,
    payload: data.name || data.detail
  }
  return action
}

const fetchEpicDataFailure = (error) => {
  const action = {
    type: FETCH_EPIC_DATA_FAILURE,
    payload: error.getMessage()
  }
  return action
}

export {
  fetchEpicShowLoading,
  fetchEpicHideLoading,
  fetchEpicDataRequest,
  fetchEpicKillRequest,
  fetchEpicDataSuccess,
  fetchEpicDataFailure,
}
