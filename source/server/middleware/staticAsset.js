import express from 'express'

const staticAsset = (props) => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: express.static(`${props.BUILD_FOLDER}/client`)
})

export default staticAsset
