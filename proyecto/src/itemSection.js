import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieBox from './MovieBox.js';

var movies = [
						{
						title : "Superman",
						src :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf69aPwB6S_-n6ytth55u5XE58wJoXs0J_M_QqqXf3f3-170s",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
						{
						title : "El Hombre Naranja",
						src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAc3JpcFBwPAWEngdIMKe79otYWba2bAoQfZ4kRvRxbkANmcH13w",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
						{
						title : "Cuatro Brazos",
						src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4VihZ0CAs529Bp9ror0CYzacY_DlzQqfPDyvVJpbKecGltKY",
						descripcion:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
						},
					]

class itemSection extends Component{
		
		

	render(){

		return(
				<div>

				{movies.map(function(movie){
				return  <div><MovieBox src={movie.src} title={movie.title} descripcion={movie.descripcion}/><br/></div>

				})}
				
				</div>
			
		)
	}
}

export default itemSection;

/*import React, { Component } from 'react';

class nuevasfrutas extends Component{

	render(){

		return(
			
			<ul id="nav">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
			
		)
	}
}

export default nuevasfrutas;*/