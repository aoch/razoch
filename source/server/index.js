import express from 'express'
import spdy from 'spdy'
import path from 'path'
import fs from 'fs'

const server = express()

// Tell Express which directory to use to serve files from
server.use(express.static(path.join(__dirname, '..', 'client')))

// Tell Express to redirect all requests back to the default route
server.get('*', (request, response, next) => response.redirect('/'))

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

// Define credentials to support HTTPS
const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
}

spdy
  .createServer(options, server)
  .listen(PORT, callback)
