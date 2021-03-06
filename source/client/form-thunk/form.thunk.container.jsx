import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.thunk.component'
import {
  fetchThunkDataRequest,
  fetchThunkDataSuccess,
  fetchThunkDataFailure,
} from './form.thunk.action.creators'

const mapStateToProps = (state) => {
  const { formThunk: { done, pass, fail } } = state
  const message = done ? (fail || pass) : 'loading...'
  const props = { message }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const api = () => fetchThunkDataRequest('/api/people/1')
  const methods = { api }
  const props = bindActionCreators(methods, dispatch)
  return props
}

const loadData = (store, request) => {
  const promise = new Promise((resolve, reject) => {
    const handler = () => {
      const state = store.getState()
      const { formThunk: { done, pass, fail } } = state
      if (done) {
        if (pass) {
          resolve(fetchThunkDataSuccess(pass))
        } else {
          reject(fetchThunkDataFailure(fail))
        }
      }
    }
    store.subscribe(handler)

    const { protocol } = request
    const hostname = request.get('Host')
    const url = `${protocol}://${hostname}/api/people/1`
    const requestAction = fetchThunkDataRequest(url)
    store.dispatch(requestAction)
  })
  return promise
    .then((data) => data)
    .catch((error) => error)
}

const FormThunkContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

const FormThunkRoute = {
  component: FormThunkContainer,
  loadData
}

export { FormThunkRoute, FormThunkContainer }
