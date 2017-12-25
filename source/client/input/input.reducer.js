import { UPDATE_INPUT } from './input.action'

const inputReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.payload
    default:
      return state
  }
}

export default inputReducer
