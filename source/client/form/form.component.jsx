import React, { Component, Fragment } from 'react'

class Form extends Component {
  render = () => {
    const { data, getData } = this.props
    const onClick = () => getData()
    return (
      <Fragment>
        <h3>{data}</h3>
        <button onClick={onClick}>Update</button>
      </Fragment>
    )
  }
}

export default Form
