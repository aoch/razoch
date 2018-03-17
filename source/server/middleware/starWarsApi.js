import fetch from 'isomorphic-fetch'

const starWarsApi = () => ({
  urlPattern: '/api/people/:id',
  methodName: 'get',
  invocation: (request, response) => {
    const { params: { id } } = request
    const url = `https://swapi.co/api/people/${id}`
    fetch(url)
      .then((data) => data.json())
      .then((json) => response.json(json))
      .catch((error) => response.error(error).end())
  }
})

export default starWarsApi
