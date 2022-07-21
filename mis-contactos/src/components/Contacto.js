import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {string} nombre
 * Texto/Título del Todo para que sea renderizado en la vista HTML
 * @param {string} apellidos
 *
 * @param {string} teléfono
 *
 * @param {string} email
 *
 *  @param {string} empresa
 *
 * @param  { ("finanzas"| "tecnológico"| "alimentación")} sector
 */
const Contacto = ({ nombre, teléfono, email, empresa, sector, apellidos }) => {
  return (
    <li>
      <ul className="contacto">
        <li key={"nombre"} >  Nombre: {nombre} {apellidos} </li>
        <li key={"telefono"}> Teléfono: {teléfono}</li>
        <li key={"email"}>Email: {email}</li>
        <li key={"empresa"}> Empresa:{empresa}</li>
        <li key={"sector"}> Sector: {sector}</li>
      </ul>
    </li>
  );
};

/**
 * Especificamos las verificaciones de los props del componente
 * Tendremos un función (onClick), un booleano (completed) y
 * un string (text)
 */
 Contacto.propTypes = {
  nombre: PropTypes.string.isRequired,
  teléfono: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  apellidos: PropTypes.string,
};

export default Contacto;
