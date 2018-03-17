import express from 'express'
import logger from '../helpers/logger'

const staticAsset = (props) => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: (request, response, next) => {
    logger.error(`[staticAsset.middleware] ${request.path}`)
    return express.static(`${props.BUILD_FOLDER}/client`)(request, response, next)
  }
})

export default staticAsset
