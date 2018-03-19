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

const loadData = (store) => {
  // console.debug('Loading data for clock')
  const time = new Date().getTime()
  const action = updateClock(time)
  const promise = store.dispatch(action)
  return promise
}

export { loadData }

export default connect(mapStateToProps, mapDispatchToProps)(Clock)
