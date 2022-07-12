import Persona from './Persona';

class Adulto extends Persona{
    constructor(nombre, apellidos, edad, trabajo, tieneCoche){
        super(nombre, apellidos, edad);
        this.tieneCoche = tieneCoche
        this.trabajo = trabajo
    }

    mostrar(){
        return `La persona ${this.nombreCompleto()} trabaja como ${this.trabajo}. Tiene coche? ${this.tieneCoche ? 'Sí' : 'No'}`
    }
}

export default Adulto;


