import React from 'react'
import ReactDOM from 'react-dom'

import InputBox from './components/InputBox'

const Application = (props) => <InputBox greeting={props.greeting} />

const domNode = document.querySelector('main')
const element = <Application greeting='Hello' />

ReactDOM.render(element, domNode)
