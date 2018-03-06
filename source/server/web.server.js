import http2Server from 'spdy'
import fs from 'fs'
import winston from 'winston'
import httpServer from './http.server'

const {
  IP = 'https://localhost',
  PORT = 3000,
  NODE_ENV
} = process.env

const callback = (error) => {
  const [level, message] = error
    ? ['error', error.toString()]
    : ['info', `[${NODE_ENV}] Server listening on ${IP}:${PORT}`]
  winston.log(level, message)
}

const httpsOptions = {
  key: fs.readFileSync('./configs/server/.key'),
  cert: fs.readFileSync('./configs/server/.crt'),
}

http2Server
  .createServer(httpsOptions, httpServer)
  .listen(PORT, callback)
