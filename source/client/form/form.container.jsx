import { connect } from 'react-redux'

import Form from './form.component'
import { fetchText } from './form.action'

const mapStateToProps = (state) => {
  const { text } = state
  const props = { text }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getText: (url) => dispatch(fetchText(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
