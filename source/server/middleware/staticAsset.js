import express from 'express'

export default ({ BUILD_FOLDER }) => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: express.static(`${BUILD_FOLDER}/client`)
})
