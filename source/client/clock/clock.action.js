const UPDATE_CLOCK = 'update_clock'

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
