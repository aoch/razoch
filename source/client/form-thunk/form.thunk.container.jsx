import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.thunk.component'
import { fetchThunkDataRequest } from './form.thunk.action.creators'

const mapStateToProps = (state) => {
  const { formThunk: { done, data } } = state
  const message = done ? data : 'loading...'
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
  const { protocol } = request
  const hostname = request.get('Host')
  const url = `${protocol}://${hostname}/api/people/1`
  const { dispatch } = store
  const promise = fetchThunkDataRequest(url)(dispatch)
  return promise
}

export { loadData }

export default connect(mapStateToProps, mapDispatchToProps)(Form)
