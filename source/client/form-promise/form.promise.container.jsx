import { connect } from 'react-redux'
import { getData } from './form.promise.action'
import Panel from './form.promise.component'

const mapStateToProps = (state) => {
  const { promiseData } = state
  const props = { promiseData }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(getData(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
