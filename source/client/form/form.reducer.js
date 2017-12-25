import { UPDATE_TEXT } from './form.action'

const formReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.payload
    default:
      return state
  }
}

export default formReducer
