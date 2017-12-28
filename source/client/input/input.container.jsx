import { connect } from 'react-redux'

import Input from './input.component'
import { updateInput } from './input.action'

const mapStateToProps = (state) => {
  const props = { value: state.value }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    updateInput: (value) => dispatch(updateInput(value))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
