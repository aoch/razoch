import React from 'react'

const DigitalClock = (props) => {
  const dateTime = props.time ? new Date(props.time) : new Date()
  return <div {...props}>{dateTime.toLocaleTimeString()}</div>
}

export default DigitalClock
