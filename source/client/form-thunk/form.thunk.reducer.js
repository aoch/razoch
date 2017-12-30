import { actionTypes } from './form.thunk.action'

const {
  FETCH_THUNK_DATA_REQUEST,
  FETCH_THUNK_DATA_SUCCESS,
  FETCH_THUNK_DATA_FAILURE
} = actionTypes

const formReducer = (state = '', action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_THUNK_DATA_REQUEST:
      return payload
    case FETCH_THUNK_DATA_SUCCESS:
      return payload
    case FETCH_THUNK_DATA_FAILURE:
      return payload
    default:
      return state
  }
}

export default formReducer
