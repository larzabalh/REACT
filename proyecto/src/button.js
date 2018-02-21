import React, { Component } from 'react';

class button extends Component{

	saludar = ()=>{
		alert('hello word')
	}

	render(){

		return(
			<button onClick={this.saludar}>
				Click me
			</button>
			
		)
	}
}

export default button;