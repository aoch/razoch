import { combineReducers } from 'redux'

import clockReducer from '../client/clock/clock.reducer'
import inputReducer from '../client/input/input.reducer'

import formThunkReducer from '../client/form-thunk/form.thunk.reducer'
import formEpicReducer from '../client/form-epic/form.epic.reducer'
import formSagaReducer from '../client/form-saga/form.saga.reducer'

const rootReducer = combineReducers({
  time: clockReducer,
  value: inputReducer,
  formThunk: formThunkReducer,
  formEpic: formEpicReducer,
  formSaga: formSagaReducer
})

export default rootReducer
