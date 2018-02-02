import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.epic.component'
import { fetchEpicDataRequest } from './form.epic.action.creators'

const mapStateToProps = (state) => {
  const { formEpic: { done, data } } = state
  const props = { done, data }
  return props
}

const mapDispatchToProps = (dispatch) => {
  // Approach1
  // const getData = (url) => dispatch(fetchEpicDataRequest(url))
  // const props = { getData }
  // return props

  // Approach2
  const getData = (url) => fetchEpicDataRequest(url)
  const methods = { getData }
  const props = bindActionCreators(methods, dispatch)
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
