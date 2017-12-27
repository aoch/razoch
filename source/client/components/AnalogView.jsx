import React from 'react'

const AnalogView = (props) => {
  const dateTime = props.time ? new Date(props.time) : new Date()

  const dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
  }

  const secondsDegress = (((dateTime.getSeconds() / 60) * 360) - 90).toString()
  const secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: `rotate( ${secondsDegress} deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  }

  const minutesDegrees = (((dateTime.getMinutes() / 60) * 360) - 90).toString()
  const minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: `rotate( ${minutesDegrees} deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  }

  const hoursDegrees = (((dateTime.getHours() / 12) * 360) - 90).toString()
  const hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: `rotate( ${hoursDegrees} deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  }

  return (
    <div>
      <div style={dialStyle}>
        <div style={secondHandStyle} />
        <div style={minuteHandStyle} />
        <div style={hourHandStyle} />
      </div>
    </div>
  )
}

export default AnalogView
