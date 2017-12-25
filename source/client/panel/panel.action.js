const GET_DATA = 'GET_DATA'

const getData = (url) => {
  const action = {
    type: GET_DATA,
    payload: fetch(url)
      .then((response) => response.json())
      .then(({ name, detail }) => name || detail)
      .catch((error) => error.toString())
  }
  return action
}

export {
  GET_DATA,
  getData
}
