import express from 'express'

export default ({ BUILD_DIR }) => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: express.static(`${BUILD_DIR}/client`)
})
