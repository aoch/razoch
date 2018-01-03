import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.onClick = () => props.getData('https://swapi.co/api/people/1')
  }
  render = () => {
    const { done, data } = this.props
    const message = done ? data : 'loading...'
    return (
      <div>
        <button onClick={this.onClick}>Get data via saga</button>
        <label>{message}</label>
      </div>
    )
  }
}

export default Form
