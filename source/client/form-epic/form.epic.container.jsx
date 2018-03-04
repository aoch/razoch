import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Form from './form.epic.component'
import { fetchEpicDataRequest } from './form.epic.action.creators'

const mapStateToProps = (state) => {
  const { formEpic: { done, data } } = state
  const message = done ? data : 'loading...'
  const props = { message }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const api = () => fetchEpicDataRequest('https://swapi.co/api/people/1')
  const methods = { api }
  const props = bindActionCreators(methods, dispatch)
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
