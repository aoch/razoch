import { combineReducers } from 'redux'

import clockReducer from '../clock/clock.reducer'
import inputReducer from '../input/input.reducer'

import formThunkReducer from '../form-thunk/form.thunk.reducer'
import formEpicReducer from '../form-epic/form.epic.reducer'
import formSagaReducer from '../form-saga/form.saga.reducer'

const rootReducer = combineReducers({
  time: clockReducer,
  value: inputReducer,
  formThunk: formThunkReducer,
  formEpic: formEpicReducer,
  formSaga: formSagaReducer
})

export default rootReducer
