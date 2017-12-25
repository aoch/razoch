import { combineReducers } from 'redux'

import clockReducer from './clock/clock.reducer'
import formReducer from './form/form.reducer'
import inputReducer from './input/input.reducer'
import panelReducer from './panel/panel.reducer'

const reducer = combineReducers({
  time: clockReducer,
  text: formReducer,
  value: inputReducer,
  data: panelReducer
})

export default reducer
