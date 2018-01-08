import { createStore, compose, applyMiddleware } from 'redux'
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
    formEpic: { loading: false, data: '' },
    formSaga: { done: true, data: '' }
  }
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
  const middlewareList = [thunkMiddleware, epicMiddleware, sagaMiddleware]
  const appliedMiddleware = applyMiddleware(...middlewareList)
  const middleware = composeEnhancers(appliedMiddleware)
  const store = createStore(rootReducer, initialState, middleware)
  sagaMiddleware.run(rootSaga)
  return store
}

export default buildStore
