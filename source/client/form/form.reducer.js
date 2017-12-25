import { UPDATE_DATA } from './form.action'

const formReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return action.payload
    default:
      return state
  }
}

export {
  UPDATE_DATA,
  formReducer
}
