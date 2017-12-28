import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './clock.scss'
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
      <Fragment >
        <DigitalClock className={'digital-clock'} time={this.props.time} timezone={this.props.timezone} />
        <AnalogClock className={'analog-clock'} time={this.props.time} timezone={this.props.timezone} />
      </Fragment>
  )
}

export default Clock
