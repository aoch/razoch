import apicache from 'apicache'

export default {
  urlPattern: '/',
  methodName: 'use',
  middleware: apicache.middleware('24 hours')
}
