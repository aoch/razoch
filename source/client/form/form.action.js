const UPDATE_TEXT = 'UPDATE_TEXT'

const updateText = (text) => {
  const action = {
    type: UPDATE_TEXT,
    payload: text
  }
  return action
}

const fetchText = (url) => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(updateText(json.name || json.detail)))
    .catch((error) => dispatch(updateText(error.toString())))
}

export {
  UPDATE_TEXT,
  fetchText
}
