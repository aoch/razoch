import React, { Component } from 'react'
import './clock.scss'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.interval = null
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.props.updateClock(new Date().toLocaleString())
    }, 1000)
  }

  componentWillUnmount = () =>
    clearInterval(this.interval)

  render = () =>
    <div className={'clock'}>{this.props.time}</div>
}

export default Clock
