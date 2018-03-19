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

const loadData = (store) => {
  // console.debug('Loading data for input')
  const value = '...'
  const action = updateInput(value)
  const promise = store.dispatch(action)
  return promise
}

export { loadData }

export default connect(mapStateToProps, mapDispatchToProps)(Input)
