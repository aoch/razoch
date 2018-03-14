const install = (server, context) => (middleware) => {
  const {
    urlPattern,
    methodName,
    invocation
  } = middleware(context)
  server[methodName](urlPattern, invocation)
}

export default install
