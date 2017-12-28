import { connect } from 'react-redux'

import Form from './form.thunk.component'
import { getData } from './form.thunk.action'

const mapStateToProps = (state) => {
  const { thunkData } = state
  const props = { thunkData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(getData(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
