const UPDATE_INPUT = 'UPDATE_INPUT'

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
