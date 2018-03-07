import React from 'react'

const Form = ({ api, message }) => (
  <div>
    <label htmlFor="saga">
      <button name="saga" onClick={api}>Get data via Saga</button>
      <span name="state">{message}</span>
    </label>
  </div>
)

export default Form
