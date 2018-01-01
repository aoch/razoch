import { createStore, compose, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import createSagaMiddleware from 'redux-saga'

import rootEpic from './rootEpic'
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const buildStore = () => {
  const initialState = {
    time: '',
    value: '',
    formThunk: { done: true, data: '' },
    promiseData: '',
    epicData: '',
    sagaData: ''
  }
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
  const middlewareList = [thunkMiddleware, promiseMiddleware, epicMiddleware, sagaMiddleware]
  const appliedMiddleware = applyMiddleware(...middlewareList)
  const middleware = composeEnhancers(appliedMiddleware)
  const store = createStore(rootReducer, initialState, middleware)
  sagaMiddleware.run(rootSaga)
  return store
}

export default buildStore
