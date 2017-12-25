import React, { Component, Fragment } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.onClick = () => props.getText('https://swapi.co/api/people/1')
  }
  render = () => (
    <Fragment>
      <button onClick={this.onClick}>Get Text</button>
      <label>{this.props.text}</label>
    </Fragment>
  )
}

export default Form
