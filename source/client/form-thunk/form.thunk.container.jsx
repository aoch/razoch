import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.thunk.component'
import { fetchThunkDataRequest } from './form.thunk.action.creators'

const mapStateToProps = (state) => {
  const { formThunk: { done, data } } = state
  const message = (done && data) || 'loading...'
  const props = { message }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const getData = (url) => fetchThunkDataRequest(url)
  const methods = { getData }
  const props = bindActionCreators(methods, dispatch)
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
