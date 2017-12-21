const UPDATE_INPUT = 'update_input'

const updateInput = (value) => {
  const action = {
    type: UPDATE_INPUT,
    payload: value
  }
  return action
}

export {
  UPDATE_INPUT,
  updateInput
}
