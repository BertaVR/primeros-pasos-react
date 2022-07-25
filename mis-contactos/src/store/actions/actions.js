let contactoId = 0;

/**
 * Función genérica para devolver acciones de todo tipo
 * Factoría de acciones
 */


// export const actionGenerator = (type, payload) => {
//     return (type, payload)
// }



export const addContacto = (nombre, email, empresa, teléfono, sector, apellidos="") => {
    return{
        type: 'ADD_CONTACTO',
        payload:{
            id: contactoId ++,
            nombre,
            email,
            empresa,
            teléfono,
            sector,
            apellidos
        }
    }
}


export const borrarContacto = (id) => {
    return{
        type: 'BORRAR_CONTACTO',
        payload:{
            id
        }
    }
}
