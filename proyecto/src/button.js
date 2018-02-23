import React, { Component } from 'react';

class button extends Component{

	saludar = ()=>{
		alert('hello word')
	}

	render(){

		return(
			<button onClick={this.saludar}>
				Añadir a Mi Lista
			</button>
			
		)
	}
}

export default button;