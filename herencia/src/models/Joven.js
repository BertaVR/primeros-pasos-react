import Persona from './Persona';

class Joven extends Persona{
    constructor(nombre, apellidos, edad, colegio, numJuguetes){
        super(nombre, apellidos, edad);
        this.colegio = colegio
        this.numJuguetes = numJuguetes
    }

    mostrar(){
        return `La persona ${this.nombreCompleto()} va al colegio ${this.colegio} y tiene ${this.numJuguetes} juguetes`
    }
}

export default Joven;

