import React, { Component } from 'react'
import Clock from './Clock';

export default class InputBox extends Component {
  state = {
    value: ''
  }

  render() {
    const { greeting } = this.props
    const { value } = this.state

    return (
      <div>
        <h1>{greeting} {value}</h1>
        <input type="text" onChange={this.updateText} />
        <Clock style={{width: "150px", borderColor: "red", borderWidth: "1", borderStyle: "solid", boxSizing: "border-box" }} />
      </div>
    )
  }

  updateText = (event) => {
    const { target: { value } } = event
    this.setState({ value })
  }
}
