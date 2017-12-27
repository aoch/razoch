import { GET_DATA } from './panel.action'

const panelReducer = (state = '', action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload
    default:
      return state
  }
}

export default panelReducer
