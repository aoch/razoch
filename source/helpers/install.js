const install = (server) => ({ urlPattern, methodName, invocation }) =>
  server[methodName](urlPattern, invocation)


export default install
