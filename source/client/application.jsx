import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Application = (props) => <h1>{props.message}</h1>

const selector = 'main'
const message = 'Page goes here'
const domNode = document.querySelector(selector)
const element = <Application message={message}/>

ReactDOM.render(element, domNode)