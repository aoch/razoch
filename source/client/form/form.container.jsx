import { connect } from 'react-redux'

import Form from './form.component'
import { getData } from './form.action'

const mapStateToProps = (state) => {
  const { data } = state
  const props = { data }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(getData(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
