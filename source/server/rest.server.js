import apicache from 'apicache'
import express from 'express'
import fetch from 'isomorphic-fetch'

import callback from './helpers/callback'

const restServer = express()

const restUrlPath = '/api/people/:id'
const restHandler = (request, response) => {
  const { params: { id } } = request
  const url = `https://swapi.co/api/people/${id}`
  fetch(url)
    .then((data) => data.json())
    .then((json) => response.json(json))
    .catch((error) => response.error(error).end())
}
const cache = apicache.middleware
restServer.get(restUrlPath, cache('24 hours'), restHandler)

const rootUrlPath = '*'
const rootHandler = (request, response) => response.sendStatus(400).end()
restServer.get(rootUrlPath, rootHandler)

const { env: { PORT } } = process
restServer
  .listen(PORT, callback(process, 'rest'))
