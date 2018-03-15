import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import createSagaMiddleware from 'redux-saga'
import createDebugMiddleware from 'redux-immutable-state-invariant'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootEpic from './rootEpic'
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const buildStore = (isProduction, initialState = {}) => {
  const idempotent = () => (next) => (action) => next(action)
  const epic = createEpicMiddleware(rootEpic)
  const saga = createSagaMiddleware()
  const debug = isProduction ? idempotent : createDebugMiddleware()
  const build = isProduction ? compose : composeWithDevTools
  const middleware = build(applyMiddleware(debug, thunk, epic, saga))
  const store = createStore(rootReducer, initialState, middleware)
  saga.run(rootSaga)
  return store
}

export default buildStore
