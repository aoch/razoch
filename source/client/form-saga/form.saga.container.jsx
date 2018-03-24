
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.saga.component'
import {
  fetchSagaDataRequest,
  fetchSagaDataSuccess,
  fetchSagaDataFailure,
} from './form.saga.action.creators'

const mapStateToProps = (state) => {
  const { formSaga: { done, pass, fail } } = state
  const message = (done && pass)
    ? pass
    : (done && fail)
      ? fail
      : 'loading...'

  const props = { message }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const api = () => fetchSagaDataRequest('/api/people/1')
  const methods = { api }
  const props = bindActionCreators(methods, dispatch)
  return props
}

const loadData = (store, request) => {
  const promise = new Promise((resolve, reject) => {
    const handler = () => {
      const state = store.getState()
      const { formSaga: { done, pass, fail } } = state
      if (done) {
        if (pass) {
          resolve(fetchSagaDataSuccess(pass))
        } else {
          reject(fetchSagaDataFailure(fail))
        }
      }
    }
    store.subscribe(handler)

    const { protocol } = request
    const hostname = request.get('Host')
    const url = `${protocol}://${hostname}/api/people/1`
    const requestAction = fetchSagaDataRequest(url)
    store.dispatch(requestAction)
  })
  return promise
    .then((data) => data)
    .catch((error) => error)
}

const FormSagaContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

const FormSagaRoute = {
  component: FormSagaContainer,
  loadData
}

export { FormSagaRoute, FormSagaContainer }
