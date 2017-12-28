import { connect } from 'react-redux'
import { getData } from './panel.action'
import Panel from './panel.component'

const mapStateToProps = (state) => {
  const { data } = state
  const props = { data }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = {
    getData: (url) => dispatch(getData(url))
  }
  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
