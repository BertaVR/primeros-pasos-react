// Ejemplo de componente que hacer uso de los hooks

// ** useState, useRef, useEffect

// ? useState añade el estado de React a un componente de función
// ? useRef hace referencia a un elemento dentro de la vista
// ? useEffect sirve para controlar cuándo un elemnto se ha modificado

import React, {useState, useRef, useEffect} from 'react';

// valor de Referencia con la vista

const EjemploOtrosHooks = () => {

    const miRef= useRef();
    const miRef2= useRef();
    const miRef3= useRef();

    // Dos estados con Contadores distintos

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Funciones para codificar los estados por separado

     function incrementar1(){
        setContador1(contador1 + 1)
    }


    function incrementar2(){
        setContador2(contador2 + 1)
    }

    // ** CASO 1 -USEEFFECT SIEMPRE SE EJECUTA PARA AMBOS CONTADORES
        // El bloque de código se ejecuta cuando cualquiera de los contadores se modifica

        useEffect(()=> {console.table(miRef)}); // mostramos por consola los datos del elemento referenciado

    // ** CASO 2 -USEEFFECT SOLO SE MODIFICA PARA CONTADOR 1
        useEffect(()=> {console.table(miRef2)}, [contador1]);

    // ** CASO 3 - SE EJECUTA CUANDO ALGUNO DE LOS ESTADOS MENCIONADOS EN EL [] ES MODIFICADP
        useEffect(()=> {console.table(miRef3)},[contador1, contador2]); 

    return (
        <div>
            <h2>*** EJEMPLO USESTATE, USEREF Y USEEFFECT</h2>
            <h3 ref={miRef} /*Elemento rederenciado con miRef*/>
                Elemento Referenciado caso 1: {contador1} - {contador2} (se muestra tabla en la consola al modificar cualquier estadp)
            </h3>

            <h3 ref={miRef2} /*Elemento rederenciado con miRef*/>
                Elemento Referenciado caso 2: {contador1} - {contador2} (se muestra tabla en la consola solo al modificar contador 1)
            </h3>

            <h3 ref={miRef3} /*Elemento rederenciado con miRef*/>
                Elemento Referenciado caso 3: {contador1} - {contador2} (se muestra tabla en la consola al modificar un estado indicado en el array [contador1, contador 2] (cualquiera))
            </h3>
            <button onClick={ incrementar1 }> Incrementar contador 1</button>
            <button onClick={ incrementar2 }> Incrementar contador 2</button>

        </div>
    );
}

export default EjemploOtrosHooks;


