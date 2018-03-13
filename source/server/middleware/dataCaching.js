import apicache from 'apicache'

export default () => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: apicache.middleware('24 hours')
})
