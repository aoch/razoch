import { connect } from 'react-redux'

import Clock from './clock.component'
import { updateClock } from './clock.action'

const mapStateToProps = (state) => {
  const props = { time: state.time }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    updateClock: (time) => dispatch(updateClock(time))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock)
