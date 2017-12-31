import { connect } from 'react-redux'
import { fetchPromiseDataRequest } from './form.promise.action.creators'
import Panel from './form.promise.component'

const mapStateToProps = (state) => {
  const { promiseData } = state
  const props = { promiseData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(fetchPromiseDataRequest(url, dispatch))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
