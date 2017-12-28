const GET_DATA_VIA_PROMISE = 'GET_DATA_VIA_PROMISE'

const getData = (url) => {
  const action = {
    type: GET_DATA_VIA_PROMISE,
    payload: fetch(url)
      .then((response) => response.json())
      .then(({ name, detail }) => name || detail)
      .catch((error) => error.toString())
  }
  return action
}

export {
  GET_DATA_VIA_PROMISE,
  getData
}
