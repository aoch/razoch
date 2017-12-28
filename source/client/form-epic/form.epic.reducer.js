import { GET_DATA_VIA_EPIC, HAS_DATA_VIA_EPIC } from './form.epic.action'

const formReducer = (state = '', action) => {
  switch (action.type) {
    case GET_DATA_VIA_EPIC:
      return state
    case HAS_DATA_VIA_EPIC:
      return action.payload
    default:
      return state
  }
}

export default formReducer
