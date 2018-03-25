/* eslint-disable */
const npmCheck = require('npm-check')
const chalk = require('chalk')

npmCheck()
  .then((currentState) => currentState.get('packages'))
  .then((packagesList) => packagesList.filter(({ unused, devDependency }) => unused && !devDependency))
  .then((infoList) => {
    if (infoList.length === 0) process.exit(0)
    return infoList
  })
  .then((infoList) => {
    const messageList = infoList.map((info) => {
      const { moduleName, installed } = info
      const message = `😕  Warning: ${moduleName} (${installed}) is not used. Remove from package.json please.`
      return message
    })
    return messageList
  })
  .then((messageList) => {
    const formattedList = messageList.map((message) => chalk.yellowBright(message))
    const message = formattedList.join('\n')
    console.warn(message)
    process.exit(1)
  })
