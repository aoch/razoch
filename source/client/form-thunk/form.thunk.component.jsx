import React from 'react'

const Form = ({ api, message }) => (
  <div>
    <label htmlFor="thunk">
      <button name="thunk" onClick={api}>Get data via Thunk</button>
      <span name="state">{message}</span>
    </label>
  </div>
)

export default Form
