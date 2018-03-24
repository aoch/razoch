import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.epic.component'
import {
  fetchEpicDataRequest,
  fetchEpicDataSuccess,
  fetchEpicDataFailure,
} from './form.epic.action.creators'

const mapStateToProps = (state) => {
  const { formEpic: { done, pass, fail } } = state
  const message = (done && pass)
    ? pass
    : (done && fail)
      ? fail
      : 'loading...'

  const props = { message }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const api = () => fetchEpicDataRequest('/api/people/1')
  const methods = { api }
  const props = bindActionCreators(methods, dispatch)
  return props
}

const loadData = (store, request) => {
  const promise = new Promise((resolve, reject) => {
    const handler = () => {
      const state = store.getState()
      const { formEpic: { done, pass, fail } } = state
      if (done) {
        if (pass) {
          resolve(fetchEpicDataSuccess(pass))
        } else {
          reject(fetchEpicDataFailure(fail))
        }
      }
    }
    store.subscribe(handler)

    const { protocol } = request
    const hostname = request.get('Host')
    const url = `${protocol}://${hostname}/api/people/1`
    const requestAction = fetchEpicDataRequest(url)
    store.dispatch(requestAction)
  })
  return promise
    .then((data) => data)
    .catch((error) => error)
}

const FormEpicContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

const FormEpicRoute = {
  component: FormEpicContainer,
  loadData
}

export { FormEpicRoute, FormEpicContainer }
