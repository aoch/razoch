import {
  FETCH_SAGA_DATA_REQUEST,
  FETCH_SAGA_DATA_SUCCESS,
  FETCH_SAGA_DATA_FAILURE
} from './form.saga.action.types'

const formReducer = (state = '', action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_SAGA_DATA_REQUEST:
      return state
    case FETCH_SAGA_DATA_SUCCESS:
      return payload
    case FETCH_SAGA_DATA_FAILURE:
      return payload
    default:
      return state
  }
}

export default formReducer
