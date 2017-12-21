import express from 'express'
import http2Server from 'spdy'
import path from 'path'
import fs from 'fs'

// Tell Express to create a basic HTTP server
const httpServer = express()

// Tell Express which directory to use to serve files from
httpServer.use(express.static(path.join(__dirname, '..', 'client')))

// Tell Express to redirect all requests back to the default route
httpServer.get('*', (request, response) => response.redirect('/'))

// Pull off environment variable values passed in to this process using object destructuring
const { IP = 'https://localhost', PORT = 3000 } = process.env

const callback = (error) => {
  const message = error || `Todo Server listening on ${IP}:${PORT}`
  console.log(message)  // eslint-disable-line
}

// Define credentials needed to support using HTTPS on this server
const httpsOptions = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
}

// Start up an HTTP2/HTTPS server to serve the Todo application
http2Server
  .createServer(httpsOptions, httpServer)
  .listen(PORT, callback)
