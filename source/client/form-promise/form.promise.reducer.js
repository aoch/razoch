import { actionTypes } from './form.promise.action'

const {
  FETCH_PROMISE_DATA_REQUEST,
  FETCH_PROMISE_DATA_SUCCESS,
  FETCH_PROMISE_DATA_FAILURE
} = actionTypes

const formReducer = (state = '', action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_PROMISE_DATA_REQUEST:
      return state
    case FETCH_PROMISE_DATA_SUCCESS:
      return payload
    case FETCH_PROMISE_DATA_FAILURE:
      return payload
    default:
      return state
  }
}

export default formReducer
