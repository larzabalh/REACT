import React, { Component } from 'react';
import PropTypes from 'prop-types';




class SearchBox extends Component {


  render() {
  	
    return (
       
      <div className="row">

            <div className="flipkart-navbar-search smallsearch col-xs-6 col-sm-8 col-lg-12">
                <div className="row">
                    <input className="col-xs-6 col-sm-8 col-lg-10" type="" placeholder="Buscar Pelicula o Serie..." name=""/>
                    <button className="btn btn-info col-sm-8 col-lg-2">BUSCAR</button>
                </div>
            </div>
      </div>
      
        );
  }
}





export default SearchBox
