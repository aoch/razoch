import React, { Component } from 'react'

export default class Clock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
    this.launchClock()
  }

  render() {
    return (
      <div>
        {this.state.currentTime}
      </div>
    )
  }

  launchClock = () => {
    setInterval(
      (currentTime) => {
        this.setState({ currentTime: (new Date()).toLocaleString() })
      }, 1000)
  }

}
