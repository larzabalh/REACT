import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';


var types=['primary','secondary','success','danger','warning','info','light','dark']
class MyAlerts extends Component {

  constructor(props) {
    super(props)
    this.state = {
                    alerts : [
                              { type : 'danger' , content : 'Este es un alert de tipo danger' },
                              { type : 'secondary' , content : 'Este es un alert de tipo secondary' },
                              { type : 'success' , content : 'Este es un alert de tipo success' },
                              ]
                    }
  }

  click = index => {
   /*console.dir(parseInt(e.target.attributes.getNamedItem('data-index').value))*/
    console.log(index)
    const {alerts} = this.state
    alerts.splice(index,1);
    this.setState({alerts}) // = alerts:alerts pero como los dos se llaman iguales, no se pone

    

  }



  render() {
  	
    return (
      <div>
        {this.state.alerts.map((alert,index)=>{
          return <Alert key={index} index={index} type={alert.type} onClick={() =>this.click(index)}>{alert.content}</Alert>;   
        })}
        {!this.state.alerts.length && <p>NO HAY MAS NADA</p>}
      </div>
    )
  }
}

/*MyAlerts.propTypes = {
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
};*/



export default MyAlerts
