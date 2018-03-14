
import express from 'express'
import { identity } from 'ramda'

import dataCaching from './middleware/dataCaching'
import starWarsApi from './middleware/starWarsApi'
import handleError from './middleware/handleError'
import install from './helpers/install'
import handle from './helpers/handle'

const server = express()

const { env: { PORT } } = process

const context = {}

const middlewareList = [
  dataCaching,
  starWarsApi,
  handleError
]

middlewareList
  .filter(identity)
  .map(install(server, context))

server
  .listen(PORT, handle(process, 'rest'))
