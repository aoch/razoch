export default (request, response, next) => {
  const encoding =
    request.headers['accept-encoding'] || ''
  if (encoding.toLowerCase().includes('gzip')) {
    request.url += '.gz'
    response.set('Content-Encoding', 'gzip')
  }
  next()
}
