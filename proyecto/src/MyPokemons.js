import React, { Component } from 'react'
import MyInput from './MyInput.js';

class MyPokemons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      items: [],
      contador: 100,
      total_items:0
    }
  }

  writing = e => {
    this.setState({
    inputValue: e.target.value,
    contador: this.state.contador -1
})
}

  click = e => {
    const { items, inputValue } = this.state//destructurar
    if(items.indexOf(inputValue)===-1){

      this.setState({
        items: [...this.state.items, inputValue],
        inputValue: '',
        contador : 100,
        total_items: this.state.total_items +1
      })
    }
    else{alert('el item ya esta cargado')}
    
  }

  vaciar = e => {

if (window.confirm('esta seguro de vaciar?')){
    this.setState({
      items: [],
      total_items:0
      })
    }
  }


  enter = e => {
    if (e.keyCode === 13) {
       /* alert('enter')*/
           this.click()
        }
      }


  render() {
    return (
      <div>
       {/*<input value={this.state.inputValue} type=""  onChange={this.writing} onKeyUp={this.enter} />*/}
       <MyInput verdura="tomate" value={this.state.inputValue}  onChange={this.writing} onKeyUp={this.enter} />
       <p>CONTADOR: {this.state.contador}</p>
       <button className="btn btn-primary" type="" onClick={this.click}>AGREGAR</button>
       <button className="btn btn-danger" type=""onClick={this.vaciar}>VACIAR</button>
       <p>{this.state.total_items>0? `${this.state.total_items} Items en total`:""}</p>

       <ol>
         {this.state.items.map((item,index) =>
            <li key={index}>{item}</li>
         )}
       </ol>
      </div>
    )
  }
}

export default MyPokemons