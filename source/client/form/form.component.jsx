import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.onClick = () => props.getText('https://swapi.co/api/people/1')
  }
  render = () => (
    <div>
      <button onClick={this.onClick}>Get info via thunk</button>
      <label>{this.props.text}</label>
    </div>
  )
}

export default Form
