
import { connect } from 'react-redux'

import Form from './form.observable.component'
import { getData } from './form.observable.action'

const mapStateToProps = (state) => {
  const { observableData } = state
  const props = { observableData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(getData(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

