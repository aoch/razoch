import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import createSagaMiddleware from 'redux-saga'
import createDebugMiddleware from 'redux-immutable-state-invariant'
import { identity } from 'ramda'
import rootEpic from './rootEpic'
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const buildStore = () => {
  const initialState = {
    time: '',
    value: '',
    formThunk: { done: true, data: '' },
    formEpic: { done: true, data: '' },
    formSaga: { done: true, data: '' }
  }
  const isProduction = (process.env.NODE_ENV === 'production')
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const sagaMiddleware = createSagaMiddleware()
  const debugMiddleware = (!isProduction && createDebugMiddleware())
  const composeEnhancers = (isProduction && compose) || (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) // eslint-disable-line

  const middlewareList = [
    debugMiddleware,
    thunkMiddleware,
    epicMiddleware,
    sagaMiddleware
  ].filter(identity)

  const appliedMiddleware = applyMiddleware(...middlewareList)
  const middleware = composeEnhancers(appliedMiddleware)
  const store = createStore(rootReducer, initialState, middleware)
  sagaMiddleware.run(rootSaga)
  return store
}

export default buildStore
