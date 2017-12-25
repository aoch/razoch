const UPDATE_CLOCK = 'UPDATE_CLOCK'

const updateClock = (time) => {
  const action = {
    type: UPDATE_CLOCK,
    payload: time
  }
  return action
}

export {
  UPDATE_CLOCK,
  updateClock
}
