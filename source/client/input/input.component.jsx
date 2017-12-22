import React, { Component } from 'react'

class Input extends Component {
  render = () => {
    const { value } = this.props
    return (
      <div>
        <h1>{value}</h1>
        <input type="text" value={value} onChange={this.onChange}/>
      </div>
    )
  }

  onChange = (event) => {
    const { target: { value } } = event
    this.props.updateInput(value)
  }
}

export default Input
