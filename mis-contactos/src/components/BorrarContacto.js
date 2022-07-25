import React from 'react'
import PropTypes from "prop-types";


export default function BorrarContacto({ onClick}) {
  return (
    <button  onClick={onClick}
    >
    Borrar Contacto
    </button>
  )


}



BorrarContacto.propTypes = {
    onClick: PropTypes.func.isRequired,

};