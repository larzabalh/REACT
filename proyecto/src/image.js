import React, { Component } from 'react';

class Image extends Component{



	render(){

		return(
			
			<div>

			<img src={this.props.src} height="100%" width="100%"/>

			</div>

			
		)
	}
}

export default Image;