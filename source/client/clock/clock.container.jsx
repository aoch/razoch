import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Clock from './clock.component'
import { updateClock } from './clock.action'

const mapStateToProps = (state) => {
  const props = { time: state.time }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actionCreatorSet = { updateClock }
  const actionCreatorMap = bindActionCreators(actionCreatorSet, dispatch)
  return actionCreatorMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock)
