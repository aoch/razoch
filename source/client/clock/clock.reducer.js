import { UPDATE_CLOCK } from './clock.action'

const clockReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_CLOCK:
      return action.payload
    default:
      return state
  }
}

export default clockReducer
