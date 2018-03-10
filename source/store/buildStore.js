import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
// import createSagaMiddleware from 'redux-saga'
import createDebugMiddleware from 'redux-immutable-state-invariant'
import { identity } from 'ramda'
import noop from 'no-op'

import rootEpic from './rootEpic'
// import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const buildStore = (
  isProduction,
  initialState = {},
  global = { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: noop }
) => {
  const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devCompose } = global
  const epicMiddleware = createEpicMiddleware(rootEpic)
  // const sagaMiddleware = createSagaMiddleware()
  const debugMiddleware = (isProduction ? null : createDebugMiddleware())
  const composeEnhancers = (isProduction ? compose : devCompose)

  const middlewareList = [
    debugMiddleware,
    thunkMiddleware,
    epicMiddleware,
    // sagaMiddleware
  ].filter(identity)

  const appliedMiddleware = applyMiddleware(...middlewareList)
  const middleware = composeEnhancers(appliedMiddleware)

  const store = createStore(rootReducer, initialState, middleware)
  // sagaMiddleware.run(rootSaga)
  return store
}

export default buildStore
