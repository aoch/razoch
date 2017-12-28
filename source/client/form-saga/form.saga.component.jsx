import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.onClick = () => props.getData('https://swapi.co/api/people/1')
  }
  render = () => (
    <div>
      <button onClick={this.onClick}>Get data via observable</button>
      <label>{this.props.observableData}</label>
    </div>
  )
}

export default Form
