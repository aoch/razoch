const UPDATE_TEXT = 'update_text'

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
    .then((json) => dispatch(updateText(json.name)))
    .catch((error) => dispatch(updateText(error.toString())))
}

export {
  UPDATE_TEXT,
  fetchText
}
