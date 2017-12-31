import {
  FETCH_EPIC_DATA_REQUEST,
  FETCH_EPIC_DATA_SUCCESS,
  FETCH_EPIC_DATA_FAILURE
} from './form.epic.action.types'

const formReducer = (state = '', action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_EPIC_DATA_REQUEST:
      return state
    case FETCH_EPIC_DATA_SUCCESS:
      return payload
    case FETCH_EPIC_DATA_FAILURE:
      return payload
    default:
      return state
  }
}

export default formReducer
