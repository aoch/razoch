import { combineReducers } from 'redux'
import { clockReducer } from './clock/clock.reducer'
import { inputReducer } from './input/input.reducer'

const reducer = combineReducers({
  time: clockReducer,
  value: inputReducer
})

export default reducer
