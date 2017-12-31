import {
  FETCH_THUNK_DATA_REQUEST,
  FETCH_THUNK_DATA_SUCCESS,
  FETCH_THUNK_DATA_FAILURE
} from './form.thunk.action.types'

const initialState = {
  done: true,
  data: ''
}

const formReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_THUNK_DATA_REQUEST:
      return { ...state, done: false, data: payload }
    case FETCH_THUNK_DATA_SUCCESS:
      return { ...state, done: true, data: payload }
    case FETCH_THUNK_DATA_FAILURE:
      return { ...state, done: true, data: payload }
    default:
      return state
  }
}

export default formReducer
