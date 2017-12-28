import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.onClick = () => props.getData('https://swapi.co/api/people/2')
  }
  render = () => (
    <div>
      <button onClick={this.onClick}>Get data via promise</button>
      <label>{this.props.promiseData}</label>
    </div>
  )
}

export default Form