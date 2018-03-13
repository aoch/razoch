import express from 'express'

const { env: { BUILD_FOLDER } } = process

export default {
  urlPattern: '/',
  methodName: 'use',
  middleware: express.static(`${BUILD_FOLDER}/client`)
}
