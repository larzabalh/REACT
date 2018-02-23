import axios from 'axios'

// Ejemplo llamado GET
axios.get('https://pokeapi.co/api/v2/pokemon/charmander').then(response => {
  console.log(response)
})

// Ejemplo llamado POST
axios.post('https://pokeapi.co/api/v2/pokemon/pidgey', {
  param1: 'primero',
  param2: 'segundo',
}).then(response => {
  console.log('nombre:',response.data.name)
  console.log('peso:',response.data.weight)
})

// Ejemplo llamado GET
axios.get('https://pokeapi.co/api/v2/pokemon/pidgeotto').then(response => {
	console.log('nombre:',response.data.name)
	console.log('peso:',response.data.weight)
})

