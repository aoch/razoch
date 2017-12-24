import React, { Component } from 'react'

class Panel extends Component {
  render = () => {
    const { text, getText } = this.props
    const onClick = () => getText('https://swapi.co/api/people/2')
    return (
      <section>
        <h3>{text}</h3>
        <input type="button" value="Click Me" onClick={onClick} />
      </section>
    )
  }
}

export default Panel
