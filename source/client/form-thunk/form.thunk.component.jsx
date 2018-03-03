import React from 'react'

const Form = ({ api, message }) => (
  <div>
    <button onClick={api}>Get data via Thunk</button>
    <label>{message}</label>
  </div>
)

export default Form
