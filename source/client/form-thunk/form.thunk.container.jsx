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

const loadData = (store) => {
  // console.debug('Loading data for thunk')
  const url = '/api/people/1'
  const action = fetchThunkDataRequest(url)
  const promise = store.dispatch(action)
  return promise
}

export { loadData }

export default connect(mapStateToProps, mapDispatchToProps)(Form)
