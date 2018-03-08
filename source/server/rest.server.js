import express from 'express'
import fetch from 'isomorphic-fetch'
import callback from './helpers/callback'

const restServer = express()

restServer.get('/api/people/:id', (request, response) => {
  const { params: { id } } = request
  const url = `https://swapi.co/api/people/${id}`
  fetch(url)
    .then((data) => data.json())
    .then((json) => response.json(json))
    .catch((error) => response.error(error).end())
})

restServer.get('*', (request, response) => {
  response.sendStatus(400).end()
})

const { env: { PORT } } = process

restServer
  .listen(PORT, callback(process, 'rest'))
