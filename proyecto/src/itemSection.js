import React, { Component } from 'react';

var movies = [
						{
						name : "Thor Ragnarok",
						},
						{
						name : "Back to the Future",
						},
						{
						name : "Robocop",
						},
					]

class itemSection extends Component{
		
		

	render(){

		return(
				<ul>

				{movies.map(function(movie){
				return <li> {movie.name} </li>
				})}
				
				</ul>

				
			
			
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