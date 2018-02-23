import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nota from './nota.js';

var notas = [
{
titulo : " Pizza casera " ,
texto : " 300 gr de harina, 160 ml de agua, 5 gr de levadura, 1 cucharadita de sal, 20 gr de aceite, 200 gr de salsa de tomate, 100 gr de mozzarella y orégano. "
},
{
titulo : " Comprar en el super " ,
texto : " Vino, picadas y servilletas "
},
{
titulo : " Pelis para ver el finde " ,
texto : " Coco, Pantera negra, The post, Downsizing "
}
];

class ListadoDeNotas extends Component {


  render() {
  	
    return (
      
        notas.map(function(nota){
        return <Nota titulo= {nota.titulo} texto={nota.texto}/>;
          }
        )
    )
  }
}

ListadoDeNotas.propTypes = {
  titulo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  texto: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.string.isRequired
    })
  ).isRequired,
};

ListadoDeNotas.defaultProps = {
  titulo: 'No tengo título',
};



export default ListadoDeNotas
