
import { connect } from 'react-redux'

import Form from './form.epic.component'
import { fetchEpicDataRequest } from './form.epic.action.creators'

const mapStateToProps = (state) => {
  const { formEpic: { loading, data } } = state
  const props = { loading, data }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(fetchEpicDataRequest(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
