import React from "react";
import PropTypes from "prop-types";
import BorrarContacto from "./BorrarContacto";
// TODO: filtro nombre
// TODO: filtro sectOr
// TODO: mostrar- ocultar contactos
// TODO: Eliminar contacto
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
const Contacto = ({
  nombre,
  teléfono,
  email,
  empresa,
  sector,
  apellidos,
  id,
  onBorrarCick,
}) => {
  return (
    <li className={sector}>
      <p key={"nombre"}>
        {" "}
        <b>
          {nombre} {apellidos}
        </b>{" "}
      </p>
      <p key={"telefono"}> Teléfono: {teléfono}</p>
      <p key={"email"}>Email: {email}</p>
      <p key={"empresa"}> Empresa:{empresa}</p>
      <p key={"sector"}> Sector: {sector}</p>
      <BorrarContacto onClick={onBorrarCick(id)}></BorrarContacto>
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
  onBorrarClick: PropTypes.func.isRequired,
};

export default Contacto;
