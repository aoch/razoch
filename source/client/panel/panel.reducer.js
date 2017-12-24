import { GET_TEXT } from './panel.action'

const panelReducer = (state = '', action) => {
  switch (action.type) {
    case GET_TEXT:
      return action.payload
    default:
      return state
  }
}

export {
  GET_TEXT,
  panelReducer
}
