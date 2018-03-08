export default (request, response, next) => {
  request.url += '.gz'
  response.set('Content-Encoding', 'gzip')
  next()
}
