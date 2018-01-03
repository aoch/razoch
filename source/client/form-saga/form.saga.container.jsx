
import { connect } from 'react-redux'

import Form from './form.saga.component'
import { fetchSagaDataRequest } from './form.saga.action.creators'

const mapStateToProps = (state) => {
  const { formSaga: { done, data } } = state
  const props = { done, data }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(fetchSagaDataRequest(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

