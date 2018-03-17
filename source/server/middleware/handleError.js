const handleError = () => ({
  urlPattern: '*',
  methodName: 'get',
  invocation: (request, response) => response.sendStatus(400).end()
})

export default handleError
