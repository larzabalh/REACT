import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import alumno from './alumno.js';
import Componente from './componente.js';
import Frutas from './frutas.js';
import Nuevasfrutas from './nuevasfrutas.js';
import Button from './button.js';
import Image from './image.js';
import EjercicioArray from './ejercicioArray.js';
import './axios.js';
import './itemSection.js';
import ItemSection from './itemSection';
import ListadoDeNotas from './listadoDeNotas.js';




var ejercicio = new EjercicioArray()
var products = ejercicio.productos
console.log(ejercicio.productos)

ejercicio.productos.forEach(function(value, index){
console.log("En el indice: " + index + " está el valor: " + value.nombre);
});

var ej2 = ejercicio.productos.filter(function(value){
  if (value.nombre==='iphone 8') {
    return value.cantidad;
  }
});

console.log(ej2[0].cantidad)
const [ primero,segundo,tercero ] = ej2
const { cantidad } =  primero

console.log(primero)
console.log(segundo)
console.log(tercero)
console.log(cantidad)

console.log('product',products)

var producMas2 = products.map(function(product){
  console.log(product)
  return { ...product, cantidad: product.cantidad + 2 };
});
console.log('producMas2',producMas2)


var computadoras =products.filter(function(product){
return product.categoria =="computadora";
});
console.log(computadoras)

var totales =products.reduce(function(accumulator,product){
return accumulator + product.cantidad;
},0);

console.log(totales)



var hernan = new alumno('hernan','larzabal','react','aprobado')
var lucas = new alumno('lucas','gonzalez','css','')

/*console.log(lucas);*/

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
      

        <Componente/>
        <Frutas/>
        <Nuevasfrutas/>
        <Button/>
        <Image/>
      
        <ItemSection/>
        <ListadoDeNotas/>
        

      </div>
    );
  }
}

export default App;
