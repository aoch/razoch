import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Application extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = { value: '' }
	// }
	state = {
		value: ''
	}

	render() {
		return (
			<div>
				<h1>{this.props.greeting} {this.state.value}</h1>
				<input type="text" onChange={this.onChange} />
			</div>
		)
	}
	onChange = (event) => {
		const { value } = event.target
		this.setState({ value })
	}
}

const domNode = document.querySelector("main")
const element = <Application greeting="Hello" /> // new Application({ greeting: 'Hello' })

ReactDOM.render(element, domNode);
