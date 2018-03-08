import express from 'express'
import fetch from 'isomorphic-fetch'
import winston from 'winston'
import chalk from 'chalk'

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

const {
  IP = 'http://localhost',
  PORT = 3001,
  NODE_ENV
} = process.env

const callback = (error) => {
  const [level, message, decorate] = error
    ? ['error', error.toString(), chalk.redBright]
    : ['info', `[${NODE_ENV}] rest server running on ${IP}:${PORT}`, chalk.yellowBright]
  const divider = '-'.repeat(120)

  winston.log(level, decorate(divider))
  winston.log(level, decorate(message))
  winston.log(level, decorate(divider))
}

restServer
  .listen(PORT, callback)
