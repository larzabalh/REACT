import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './image.js';


class MovieBox extends Component {

  render() {
    
const uno ={
    display: 'table-cell',
    float: 'none',
};
    return (
       
      <div className="row">
          <div className="text-right align-bottom col-xs-6 col-sm-8 col-lg-2">
            <Image style={uno} src={this.props.src}/>
          </div>
          <div className="col-xs-6 col-sm-8 col-lg-4 text-left">
            <h4>{this.props.title}</h4>
            <p>{this.props.descripcion}</p>
            <a href="#" className="btn btn-primary">BORRAR</a>
          </div>
        
      </div>
   
        );
  }
}





export default MovieBox
