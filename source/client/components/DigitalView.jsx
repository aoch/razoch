import React from 'react'

const DigitalView = (props) => {
  const dateTime = props.time ? new Date(props.time) : new Date()
  return <div {...props}>{dateTime}</div>
}

export default DigitalView
