const GET_TEXT = 'get_text'

const getText = (url) => {
  const action = {
    type: GET_TEXT,
    payload: fetch(url)
      .then((response) => response.json())
      .then(({ name, detail }) => name || detail)
      .catch((error) => error.toString())
  }
  return action
}

export {
  GET_TEXT,
  getText
}
