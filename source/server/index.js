import express from 'express'
import spdy from 'spdy'
import fs from 'fs'

const server = express()

server.get('*', (request, response) => response.send('hello andrew').end())

const {
  env: {
    IP = 'https://localhost',
    PORT = 3000
  }
} = process

const callback = (error) => {
  if (error) {
    console.error(error)
    return process.exit(1)
  } else {
    console.log(`listening on ${IP}:${PORT}`)
  }
}

const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
}

spdy
  .createServer(options, server)
  .listen(PORT, callback)
