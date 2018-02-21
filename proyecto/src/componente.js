import React, { Component } from 'react';

class Componente extends Component{

	render(){

		return (
			React.createElement("div", {}, 
				[React.createElement(
					"H1",
					null,
					"MI PRIMER COMPONENTE"
				),
				React.createElement(
					"P",
					null,
					"Practicando crear componentes sin JSX"
				)]

			)
		);
	}
}

export default Componente;