import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getData } from './panel.action'
import Panel from './panel.component'

const mapStateToProps = (state) => {
  const { data } = state
  const props = { data }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = bindActionCreators({ getData }, dispatch)
  return props
}


export default connect(mapStateToProps, mapDispatchToProps)(Panel)
