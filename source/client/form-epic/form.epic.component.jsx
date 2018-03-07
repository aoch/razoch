import React from 'react'

const Form = ({ api, message }) => (
  <div>
    <label htmlFor="epic">
      <button name="epic" onClick={api}>Get data via Epic</button>
      <span name="state">{message}</span>
    </label>
  </div>
)

export default Form
