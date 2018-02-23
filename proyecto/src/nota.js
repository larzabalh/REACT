import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Nota extends Component {

	

  render() {
  	const uno = {
		color: 'white',
		backgroundColor:'black',
	}
	const dos = {
		color: 'red',
		backgroundColor:'blue',
	}
    return (
      
    	<h2>
    		<p style={uno}>{this.props.titulo}</p>
    		<p style={dos}>{this.props.texto}</p>
    	</h2>

    )
  }
}


Nota.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  
};

Nota.defaultProps = {
  titulo: 'No tengo título',
  texto: 'No tengo texto',
};

export default Nota
