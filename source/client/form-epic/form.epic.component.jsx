import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.onClick = () => props.getData('https://swapi.co/api/people/1')
  }
  render = () => {
    const { loading, data } = this.props
    const message = loading ? 'loading...' : data
    return (
      <div>
        <button onClick={this.onClick}>Get data via epic</button>
        <label>{message}</label>
      </div>
    )
  }
}

export default Form
