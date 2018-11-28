import React from 'react'

const DigitalClock = (props) => {
  const dateTime = props.time ? new Date(props.time) : new Date()

  const digitalStyle = {
    color: 'white'
  }

  return (
    <div className='clock digital-clock' style={digitalStyle}>
      <div {...props}>{dateTime.toLocaleTimeString()}</div>
    </div>
  )
}

export default DigitalClock
