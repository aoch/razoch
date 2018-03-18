
import express from 'express'

import dataCaching from './middleware/dataCaching'
import starWarsApi from './middleware/starWarsApi'
import handleError from './middleware/handleError'
import install from './helpers/install'
import handle from './helpers/handle'

const server = express()

const {
  env: {
    PORT
  }
} = process

const middlewareList = [
  dataCaching(),
  starWarsApi(),
  handleError()
]

middlewareList
  .map(install(server))

server
  .listen(PORT, handle(process, 'rest'))
