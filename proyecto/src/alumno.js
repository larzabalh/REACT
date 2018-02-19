/*var alumno = {
nombre:"Pepe",
apellido:"Perez",
curso:"React",
aprobado:true
}*/

class alumno {
	constructor(nombre,apellido,curso,aprobado){
		this.nombre = nombre;
		this._apellido = apellido;
		this._curso = curso;
		this._aprobado = aprobado;

	}

	getNombre(){
		return this.nombre;
	}
	setNombre(nombre){
		this._nombre = nombre;
	}

	get apellido(){
		return this._apellido;
	}

	set apellido(apellido){
		this._apellido = apellido;
	}

	get curso(){
		return this._curso;
	}

	set curso(curso){
		this._curso = curso;
	}

	get aprobado(){
		return this._aprobado;
	}

	set aprobado(aprobado){
		this._aprobado = aprobado;
	}
}

export default alumno;