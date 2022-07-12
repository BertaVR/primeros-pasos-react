import React, { Component } from 'react'

class Contador extends Component {
    constructor(props) {
      super(props);

      // Estado privado del componente
      
      this.state = {
        
        // Se genera una fecha como estado inicial del componente

        fecha: new Date(),
        nombre: 'Berta',
        apellido: 'Vergés',
        edad: 23,

      }
  }
  
  componentDidMount(){
    setInterval( ()=>{
        this.tick(); // cada segundo actualizar estado del componente (propiedades pruivdas)
     }, 1000)
  }

  componentDidUpdate(){console.log('contador - componente actualizado')}

  render() {
    return (
      <div>
        <h2>
            Hora actual: {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h2>
            Datos del usuario
        </h2>
        <h3>
          Nombre: {this.state.nombre} {this.state.apellido}
        </h3>
        <h4>
          Edad: {this.state.edad}
        </h4>
      </div>
    )
  }

  tick(){

    // no modificar el estado con this.state -> encapsular

    this.setState((prevState)=>{
      console.log(prevState)
      let edad = prevState.edad + 1; // FIXME: se suman 2

      return {
        ...prevState, // nombre, apellido (para no perderlos en el nuevo estado)
        edad, //edad : edad -> actualizo la edad con un nuevo valor
        fecha: new Date() // Actualizar fecha con un nuevo valor
      }
    });
  }
}

export default Contador;