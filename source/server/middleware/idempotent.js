const idempotent = () => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: (request, response, next) => next()
})

export default idempotent
