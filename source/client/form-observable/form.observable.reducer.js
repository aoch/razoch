import { GET_DATA_VIA_OBSERVABLE, HAS_DATA_VIA_OBSERVABLE } from './form.observable.action'

const formReducer = (state = '', action) => {
  switch (action.type) {
    case GET_DATA_VIA_OBSERVABLE:
      return state
    case HAS_DATA_VIA_OBSERVABLE:
      return action.payload
    default:
      return state
  }
}

export default formReducer
