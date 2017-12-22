import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Input from './input.component'
import { updateInput } from './input.action'

const mapStateToProps = (state) => {
  const props = { value: state.value }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actionCreatorSet = { updateInput }
  const actionCreatorMap = bindActionCreators(actionCreatorSet, dispatch)
  return actionCreatorMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
