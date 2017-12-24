import { combineReducers } from 'redux'
import { clockReducer } from './clock/clock.reducer'
import { inputReducer } from './input/input.reducer'
import { panelReducer } from './panel/panel.reducer'

const reducer = combineReducers({
  time: clockReducer,
  value: inputReducer,
  text: panelReducer
})

export default reducer
