import { GET_DATA_VIA_PROMISE } from './form.promise.action'

const formReducer = (state = '', action) => {
  switch (action.type) {
    case GET_DATA_VIA_PROMISE:
      return action.payload
    default:
      return state
  }
}

export default formReducer
