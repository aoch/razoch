import React, { Component } from 'react'

class Panel extends Component {
  constructor(props) {
    super(props)
    this.onClick = () => props.getData('https://swapi.co/api/people/2')
  }
  render = () => (
    <div>
      <button onClick={this.onClick}>Get info via promise</button>
      <label>{this.props.data}</label>
    </div>
  )
}

export default Panel
