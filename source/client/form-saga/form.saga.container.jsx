
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.saga.component'
import { fetchSagaDataRequest } from './form.saga.action.creators'

const mapStateToProps = (state) => {
  const { formSaga: { done, data } } = state
  const message = done ? data : 'loading...'
  const props = { message }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const api = () => fetchSagaDataRequest('/api/people/1')
  const methods = { api }
  const props = bindActionCreators(methods, dispatch)
  return props
}

const loadData = (store) => {
  // console.debug('Loading data for saga')
  const url = '/api/people/1'
  const action = fetchSagaDataRequest(url)
  const promise = store.dispatch(action)
  return promise
}

export { loadData }

export default connect(mapStateToProps, mapDispatchToProps)(Form)

