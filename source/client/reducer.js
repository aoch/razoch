import { combineReducers } from 'redux'
import { clockReducer } from './clock/clock.reducer'
import { inputReducer } from './input/input.reducer'
import { formReducer } from './form/form.reducer'

const reducer = combineReducers({
  time: clockReducer,
  value: inputReducer,
  text: formReducer
})

export default reducer
