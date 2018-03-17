import apicache from 'apicache'

const dataCaching = () => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: apicache.middleware('24 hours')
})

export default dataCaching
