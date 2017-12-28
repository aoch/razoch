
import { connect } from 'react-redux'

import Form from './form.saga.component'
import { getData } from './form.saga.action'

const mapStateToProps = (state) => {
  const { sagaData } = state
  const props = { sagaData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(getData(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

