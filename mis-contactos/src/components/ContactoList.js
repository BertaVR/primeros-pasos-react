import React from "react";
import PropTypes from "prop-types";
import Contacto from "./Contacto";
import { borrarContacto } from "../store/actions/actions";

/**
 * 
 * @param {object} contactos
¡¡
 */
const ContactoList = ({ contactos, onBorrarClick }) => {
  const h1 = <h1>Mi Lista de Contactos </h1>;
  if (contactos.length < 1) {
    return (
      <div>
        {h1}
        <h2> No hay contactos, añada uno para empezar la lista</h2>
      </div>
    );
  }
  if (contactos.length >= 1) {
    return (
      <div>
        {h1}
        <ul>
          {contactos.map((contacto) => (
            <Contacto
              key={contacto.id}
              {...contacto} //
              onClick={() => {
                if (window.confirm("Borrar contacto?")) {
                  onBorrarClick(contacto.id);
                }
              }}
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
  onBorrarClick: PropTypes.func.isRequired,
};

export default ContactoList;
