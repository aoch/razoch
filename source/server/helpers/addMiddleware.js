const addMiddleware = (server) =>
  ({ urlPattern, methodName, middleware }) =>
    server[methodName](urlPattern, middleware)

export default addMiddleware
