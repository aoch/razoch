
import { connect } from 'react-redux'

import Form from './form.epic.component'
import { getData } from './form.epic.action'

const mapStateToProps = (state) => {
  const { epicData } = state
  const props = { epicData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(getData(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

