import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import alumno from './alumno.js';



var hernan = new alumno('hernan','larzabal','react','aprobado')
var lucas = new alumno('lucas','gonzalez','css','')

console.log(lucas);

/*hernan.nombre= 'jose'
hernan.apellido= 'cito*/

var estadoDelCurso = (alumno) => {
  if (alumno.aprobado==='aprobado') {return 'aprobado'}
  else if (alumno.aprobado==='reprobado') {return 'desaprobado'}
  else if (alumno.aprobado==='') {return 'cursando'}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{hernan.nombre} {hernan.apellido}</h1>
          <h2> {lucas.apellido} </h2>
        </header>
        <p className="App-intro">
          {estadoDelCurso(hernan)}
        </p>
      </div>
    );
  }
}

export default App;
