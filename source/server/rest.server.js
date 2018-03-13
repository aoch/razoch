
import express from 'express'

import dataCaching from './middleware/dataCaching'
import starWarsApi from './middleware/starWarsApi'
import handleError from './middleware/handleError'

import addMiddleware from './helpers/addMiddleware'
import callback from './helpers/callback'

const restServer = express()

const middlewareList = [
  dataCaching,
  starWarsApi,
  handleError
]

middlewareList.forEach(addMiddleware(restServer))

const { env: { PORT } } = process
restServer
  .listen(PORT, callback(process, 'rest'))
