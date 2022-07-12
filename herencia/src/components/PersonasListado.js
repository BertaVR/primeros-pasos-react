import Adulto from '../models/Adulto';
import Joven from '../models/Joven';


function PersonasListado() {

let adulto1 = new Adulto('Pepe', 'Martinez', 29, 'Desarrollador', true);
let adulto2 = new Adulto('Juan', 'Delgado', 32, 'Taxista', true);
let adulto3 = new Adulto('Vicente', 'Groselles', 27, 'Carnicero', false);

let joven1 = new Joven('Andres', 'Torres', 5, 'La Pureza de María', 2);
let joven2 = new Joven('Juan', 'García', 29, 'Ciudad de Bolonia', 12);
let joven3 = new Joven('Luis', 'Rubio', 29, 'San Pedro Pascual', 7);

var arrayPersonas = [adulto1, joven1, adulto2, joven2, adulto3, joven3];
  return (
    <div>
    { arrayPersonas.map( (persona, index) => {
      return <div key={index}><h3> { persona.mostrar() }</h3></div>;
      })
    }
    </div>
  )
}



export default PersonasListado;
