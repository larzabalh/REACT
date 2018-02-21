import React, { Component } from 'react';

class frutas extends Component{

	render(){

		return (
			React.createElement("div", {}, 
				[React.createElement(
					"ol",
					{id:"lista_frutas"},
					"LISTA DE FRUTAS:"
				),
				React.createElement(
					"li",
					null,
					"manzana"
				),
				React.createElement(
					"li",
					null,
					"pera"
				),
				React.createElement(
					"li",
					null,
					"banana"
				),

				]

			)
		)
	}
}

export default frutas;