import { GET_DATA_VIA_SAGA, HAS_DATA_VIA_SAGA } from './form.saga.action'

const formReducer = (state = '', action) => {
  switch (action.type) {
    case GET_DATA_VIA_SAGA:
      return state
    case HAS_DATA_VIA_SAGA:
      return action.payload
    default:
      return state
  }
}

export default formReducer
