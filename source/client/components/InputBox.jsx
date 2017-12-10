import React, { Component } from 'react'

class InputBox extends Component {
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
      </div>
    )
  }

  updateText = (event) => {
    const { target: { value } } = event
    this.setState({ value })
  }
}

export default InputBox
