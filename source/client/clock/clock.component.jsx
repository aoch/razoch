import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DigitalClock from './digital.component'
import AnalogClock from './analog.component'

class Clock extends Component {
  static defaultProps = { timezone: 'Europe/London' }
  static propTypes = { timezone: PropTypes.string.isRequired }

  constructor(props) {
    super(props)
    this.interval = null
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.props.updateClock(new Date().getTime())
    }, 1000)
  }

  componentWillUnmount = () =>
    clearInterval(this.interval)

  render = () => (
    <div className="clocks">
      <DigitalClock time={this.props.time} timezone={this.props.timezone} />
      <AnalogClock time={this.props.time} timezone={this.props.timezone} />
    </div>
  )
}

export default Clock
