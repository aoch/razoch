import React, { Component } from 'react'
//import DigitalView from './DigitalView';
//import AnalogView from './AnalogView';

class Clock extends Component {

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

  render = () => {
    return (
      <div {...this.props} style={{width: "150px", borderColor: "red", borderWidth: "1", borderStyle: "solid", boxSizing: "border-box" }}>
        {this.state.currentTime}
      </div>
    )
  }

  launchClock = () => {
    return setInterval(
      () => {
        this.setState({ currentTime: new Date().toLocaleString() })
      }, 1000)
  }

}

export default Clock
