
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.saga.component'
import { fetchSagaDataRequest } from './form.saga.action.creators'

const mapStateToProps = (state) => {
  const { formSaga: { done, data } } = state
  const props = { done, data }
  return props
}

const mapDispatchToProps = (dispatch) => {
  // Approach1
  // const getData = (url) => dispatch(fetchSagaDataRequest(url))
  // const props = { getData }
  // return props

  // Approach2
  const getData = (url) => fetchSagaDataRequest(url)
  const methods = { getData }
  const props = bindActionCreators(methods, dispatch)
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

