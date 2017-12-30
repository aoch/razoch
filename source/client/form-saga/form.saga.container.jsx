
import { connect } from 'react-redux'

import Form from './form.saga.component'
import { actionCreators } from './form.saga.action'

const mapStateToProps = (state) => {
  const { sagaData } = state
  const props = { sagaData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const { fetchSagaDataRequest } = actionCreators
  const props = {
    getData: (url) => dispatch(fetchSagaDataRequest(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

