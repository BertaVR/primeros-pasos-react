import React from "react";
import PropTypes from "prop-types";
import Contacto from "./Contacto";

/**
 * 
 * @param {object} contactos
¡¡
 */
const ContactoList = ({ contactos }) => {
    const h1 =  <h1>Mi Lista de Contactos </h1>;
    if (contactos.length<1) {
        return (
          <div>
            {h1}
            <h2> No hay contactos, añada uno para empezar la lista</h2>
          </div>
        );}
  if (contactos.length>=1) {
    return (
      <div>
        {h1}
        <ul>
          {contactos.map((contacto) => (
            <Contacto
              key={contacto.id}
              {...contacto} //
            />
          ))}
        </ul>
      </div>
    );
  }
  
};

ContactoList.propTypes = {
  contactos: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      teléfono: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      empresa: PropTypes.string.isRequired,
      sector: PropTypes.string.isRequired,
      apellidos: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default ContactoList;
