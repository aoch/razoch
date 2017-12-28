import React, { Component } from 'react'

class Input extends Component {
  render = () => {
    const { value, label } = this.props
    return (
      <div>
        <input type="text" value={value} onChange={this.onChange}/>
        <label>{label}</label>
      </div>
    )
  }

  onChange = (event) => {
    const { target: { value } } = event
    this.props.updateInput(value)
  }
}

Input.defaultProps = { label: 'Input text' }

export default Input
