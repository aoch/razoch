import React, { Component, Fragment } from 'react'
import './clock.scss'
import DigitalClock from './digital.component'
import AnalogClock from './analog.component'

class Clock extends Component {
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
        <DigitalClock className={'digital-clock'} time={this.props.time} />
        <AnalogClock className={'analog-clock'} time={this.props.time} />
      </Fragment>
  )
}

export default Clock
