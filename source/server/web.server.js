import http2Server from 'spdy'
import fs from 'fs'
import winston from 'winston'
import chalk from 'chalk'

import httpServer from './http.server'

const {
  IP = 'https://localhost',
  PORT = 3000,
  NODE_ENV
} = process.env

const callback = (error) => {
  const [level, message, decorate] = error
    ? ['error', error.toString(), chalk.redBright]
    : ['info', `[${NODE_ENV}] server running on ${IP}:${PORT}`, chalk.yellowBright]
  const divider = '-'.repeat(120)

  winston.log(level, decorate(divider))
  winston.log(level, decorate(message))
  winston.log(level, decorate(divider))
}

const httpsOptions = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}

http2Server
  .createServer(httpsOptions, httpServer)
  .listen(PORT, callback)
