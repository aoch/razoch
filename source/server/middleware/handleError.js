export default () => ({
  urlPattern: '*',
  methodName: 'get',
  invocation: (request, response) => response.sendStatus(400).end()
})
