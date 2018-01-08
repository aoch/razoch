import {
  FETCH_EPIC_SHOW_LOADING,
  FETCH_EPIC_HIDE_LOADING,
  FETCH_EPIC_DATA_REQUEST,
  FETCH_EPIC_DATA_SUCCESS,
  FETCH_EPIC_DATA_FAILURE
} from './form.epic.action.types'

const initialState = {
  loading: false,
  data: ''
}

const formReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_EPIC_SHOW_LOADING:
      return { ...state, loading: payload }
    case FETCH_EPIC_HIDE_LOADING:
      return { ...state, loading: payload }
    case FETCH_EPIC_DATA_REQUEST:
      return { ...state, data: payload }
    case FETCH_EPIC_DATA_SUCCESS:
      return { ...state, data: payload }
    case FETCH_EPIC_DATA_FAILURE:
      return { ...state, data: payload }
    default:
      return state
  }
}

export default formReducer
