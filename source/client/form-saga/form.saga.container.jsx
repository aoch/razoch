
import { connect } from 'react-redux'

import Form from './form.saga.component'
import { fetchSagaDataRequest } from './form.saga.action.creators'

const mapStateToProps = (state) => {
  const { sagaData } = state
  const props = { sagaData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(fetchSagaDataRequest(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

