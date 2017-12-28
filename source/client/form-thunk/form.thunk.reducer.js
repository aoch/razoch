import { GET_DATA_VIA_THUNK } from './form.thunk.action'

const formReducer = (state = '', action) => {
  switch (action.type) {
    case GET_DATA_VIA_THUNK:
      return action.payload
    default:
      return state
  }
}

export default formReducer
