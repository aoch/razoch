import { combineReducers } from 'redux'

import clockReducer from './clock/clock.reducer'
import formReducer from './form/form.reducer'
import inputReducer from './input/input.reducer'

const reducer = combineReducers({
  time: clockReducer,
  text: formReducer,
  value: inputReducer
})

export default reducer
