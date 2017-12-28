const GET_DATA_VIA_THUNK = 'GET_DATA_VIA_THUNK'

const updateData = (thunkData) => {
  const action = {
    type: GET_DATA_VIA_THUNK,
    payload: thunkData
  }
  return action
}

const getData = (url) => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(updateData(json.name || json.detail)))
    .catch((error) => dispatch(updateData(error.toString())))
}

export {
  GET_DATA_VIA_THUNK,
  getData
}
