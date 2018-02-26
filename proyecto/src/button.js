import React, { Component } from 'react';

class button extends Component{

	saludar = ()=>{
		alert('hello word')
	}

	render(){

		return(
			<button className="btn btn-primary" onClick={this.saludar}>
				Añadir a Mi Lista
			</button>
			
		)
	}
}

export default button;