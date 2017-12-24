import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getText } from './panel.action'
import Panel from './panel.component'

const mapStateToProps = (state) => {
  const { text } = state
  const props = { text }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const props = bindActionCreators({ getText }, dispatch)
  return props
}


export default connect(mapStateToProps, mapDispatchToProps)(Panel)
