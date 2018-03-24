import {
  FETCH_EPIC_DATA_REQUEST,
  FETCH_EPIC_DATA_SUCCESS,
  FETCH_EPIC_DATA_FAILURE
} from './form.epic.action.types'

const initialState = {
  done: true,
  pass: '',
  fail: ''
}

const formReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_EPIC_DATA_REQUEST:
      return { ...state, done: false, pass: payload, fail: '' }
    case FETCH_EPIC_DATA_SUCCESS:
      return { ...state, done: true, pass: payload, fail: '' }
    case FETCH_EPIC_DATA_FAILURE:
      return { ...state, done: true, pass: '', fail: payload }
    default:
      return state
  }
}

export default formReducer
