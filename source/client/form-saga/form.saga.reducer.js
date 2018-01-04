import {
  FETCH_SAGA_DATA_REQUEST,
  FETCH_SAGA_DATA_SUCCESS,
  FETCH_SAGA_DATA_FAILURE
} from './form.saga.action.types'

const initialState = {
  done: true,
  data: ''
}

const formReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_SAGA_DATA_REQUEST:
      return { ...state, done: false, data: payload }
    case FETCH_SAGA_DATA_SUCCESS:
      return { ...state, done: true, data: payload }
    case FETCH_SAGA_DATA_FAILURE:
      return { ...state, done: true, data: payload }
    default:
      return state
  }
}

export default formReducer
