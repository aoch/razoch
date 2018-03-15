export default () => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: (request, response, next) => next()
})
