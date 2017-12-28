import { combineReducers } from 'redux'

import clockReducer from './clock/clock.reducer'
import inputReducer from './input/input.reducer'

import formThunkReducer from './form-thunk/form.thunk.reducer'
import formPromiseReducer from './form-promise/form.promise.reducer'
import formObservableReducer from './form-observable/form.observable.reducer'

const reducer = combineReducers({
  time: clockReducer,
  value: inputReducer,
  thunkData: formThunkReducer,
  promiseData: formPromiseReducer,
  observableData: formObservableReducer
})

export default reducer
