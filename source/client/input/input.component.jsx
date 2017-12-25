import React, { Component } from 'react'

class Input extends Component {
  render = () => {
    const { value } = this.props
    return (
      <div>
        <input type="text" value={value} onChange={this.onChange}/>
        <label>{value}</label>
      </div>
    )
  }

  onChange = (event) => {
    const { target: { value } } = event
    this.props.updateInput(value)
  }
}

export default Input
