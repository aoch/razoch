export default {
  urlPattern: '*',
  methodName: 'get',
  middleware: (request, response) => response.sendStatus(400).end()
}
