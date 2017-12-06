import express from 'express'
import spdy from 'spdy'
import path from 'path'
import fs from 'fs'

// Tell Express to create a basic HTTP server
const server = express()

// Tell Express which directory to use to serve files from
server.use(express.static(path.join(__dirname, '..', 'client')))

// Tell Express to redirect all requests back to the default route
server.get('*', (request, response, next) => response.redirect('/'))

// Pull off environment variable values passed in to this process
const { IP = 'https://localhost', PORT = 3000 } = process.env

const callback = (error) => {
  if (error) {
    console.error(error)
    return process.exit(1)
  } else {
    console.log(`Todo Server listening on ${IP}:${PORT}`)
  }
}

// Define credentials needed to support using HTTPS on this server
const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
}

// Start up an HTTP2/HTTPS server to serve the Todo application
spdy
  .createServer(options, server)
  .listen(PORT, callback)
