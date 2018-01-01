import { connect } from 'react-redux'

import Form from './form.thunk.component'
import { fetchThunkDataRequest } from './form.thunk.action.creators'

const mapStateToProps = (state) => {
  const { formThunk: { done, data } } = state
  const props = { done, data }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(fetchThunkDataRequest(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
