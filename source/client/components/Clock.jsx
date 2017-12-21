import React, { Component } from 'react'

export default class Clock extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.state = {
      currentTime: new Date().toLocaleString()
    }
    this.interval = this.launchClock()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render = () => <div {...this.props}>{this.state.currentTime}</div>

  launchClock = () => {
    return setInterval(
      () => {
        this.setState({ currentTime: new Date().toLocaleString() })
      }, 1000)
  }

}
