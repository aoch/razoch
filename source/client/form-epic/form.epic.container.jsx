
import { connect } from 'react-redux'

import Form from './form.epic.component'
import { actionCreators } from './form.epic.action'

const mapStateToProps = (state) => {
  const { epicData } = state
  const props = { epicData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const { fetchEpicDataRequest } = actionCreators
  const props = {
    getData: (url) => dispatch(fetchEpicDataRequest(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
