
import express from 'express'
import { identity } from 'ramda'

import dataCaching from './middleware/dataCaching'
import starWarsApi from './middleware/starWarsApi'
import handleError from './middleware/handleError'
import install from './helpers/install'
import handle from './helpers/handle'

const server = express()

const middlewareList = [
  dataCaching(),
  starWarsApi(),
  handleError()
]

middlewareList
  .filter(identity)
  .map(install(server))

const { env: { PORT } } = process
server
  .listen(PORT, handle(process, 'rest'))
