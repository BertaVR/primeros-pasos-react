import React, { useState } from "react";
// Hacer uso de FORMIK, un gestor de formularios
import { Formik } from "formik";
import * as Yup from "yup";
import "../styles/Formik.css";

export default function FormularioContacto({ submit }) {
  const nombre = React.createRef();
  const email = React.createRef();
  const teléfono = React.createRef();
  const sector = React.createRef();
  const empresa = React.createRef();
  const apellidos = React.createRef();

  const mostrarFormInicial = false;

  var [mostrarForm, setMostrarForm] = useState(mostrarFormInicial);

  return (
    <div>
      <button onClick={() => setMostrarForm(!mostrarForm)}>
        {mostrarForm ? "Ocultar formulario" : "Mostrar Formulario"}
      </button>

     
        {mostrarForm && <Formik
          onSubmit={() => {
            console.log("");
            var fields = [
              nombre.current.value,
              email.current.value,
              empresa.current.value,
              teléfono.current.value,
              sector.current.value,
              apellidos.current.value,
            ];
            submit(...fields);
          }}
          initialValues={{
            nombre: "",
            apellidos: "",
            telefono: "",
            email: "",
            empresa: "",
            sector: "",
          }} // obligatorio initialValues
          validationSchema={Yup.object().shape({
            nombre: Yup.string()
              .max(10, "El nombre debe contener como máximo 10 caracteres")
              .required("Por favor, indique su nombre"),
            apellidos: Yup.string().max(
              30,
              "Los apellidos deben contener como máximo 30 caracteres"
            ),
            telefono: Yup.string().required("Por favor, indique el teléfono"),
            email: Yup.string()
              .email("El formato de email no es correcto")
              .required("Por favor, indique un email de contacto"),
            empresa: Yup.string()
              .max(40, "La empresa debe contener como máximo 40 caracteres")
              .required("Por favor, indique su empresa"),
            sector: Yup.string().oneOf(
              ["finanzas", "tecnológico", "alimentación"],
              "Elija el sector"
            ),
          })}
        >
          {/* **** PASAMOS PROPS al FORMULARIO QUE VAMOS A PINTAR
      - values: valores del formulario
      - touched: nos dice si un campo ha sido tocado por el usuario o no
      - errors: nos lista los errores del formulario
      - isSubmitting: nos dice si se está ejecutando el submit del formulario
      - handelChange: manejar cambios en los campos del formulario
      - handleBlur: manejar blur de los campos
      - handleSubmit: manejador para ejecutar la función onsubmit de Formik*/}
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleSubmit,
              handleBlur,
              handleChange,
              resetForm,
              dirty,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="nombre"> Nombre</label>
                <input
                  required={true}
                  max={10}
                  ref={nombre}
                  name="nombre"
                  type="text"
                  placeholder="Escriba el nombre del contacto"
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.nombre && touched.nombre && "error"}
                />
                {errors.nombre && touched.nombre && (
                  <div className="input-error">
                    {errors.nombre /* errores que hemos personalizado de yup*/}
                  </div>
                )}

                <label htmlFor="apellidos"> Apellidos</label>
                <input
                  max={30}
                  ref={apellidos}
                  name="apellidos"
                  type="text"
                  placeholder="Puede indicar los apellidos del contacto"
                  value={values.apellidos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.apellidos && touched.apellidos && "error"}
                />
                {errors.apellidos && touched.apellidos && (
                  <div className="input-error">{errors.apellidos}</div>
                )}

                <label htmlFor="email"> Email</label>
                <input
                  ref={email}
                  required={true}
                  max={10}
                  name="email"
                  type="text"
                  placeholder="Escriba el email del contacto"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
                {/* Mostramos los errores relacionados con el email */}
                {errors.email && touched.email && (
                  <div className="input-error">{errors.email}</div>
                )}

                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  ref={empresa}
                  required={true}
                  name="empresa"
                  placeholder="Escriba el nombre de la empresa"
                  value={values.empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.empresa && touched.empresa && "error"}
                ></input>
                {errors.empresa && touched.empresa && (
                  <div className="input-error">{errors.empresa}</div>
                )}

                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="text"
                  ref={teléfono}
                  required={true}
                  name="telefono"
                  placeholder="Escriba el teléfono"
                  value={values.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.telefono && touched.telefono && "error"}
                ></input>
                {errors.telefono && touched.telefono && (
                  <div className="input-error">{errors.telefono}</div>
                )}
                <label htmlFor="sector"> Sector</label>
                <select
                  name="sector"
                  value={values.sector}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ref={sector}
                >
                  <option value="" disabled>
                    Elija una opción
                  </option>
                  <option value="finanzas">Finanzas</option>
                  <option value="tecnológico">Tecnológico</option>
                  <option value="alimentación">Alimentación</option>
                </select>
                {/* TODO: Validación de sector*/}

                <button
                  type="submit"
                  disabled={!dirty || Object.keys(errors).length > 0}
                >
                  Guardar
                </button>
                <button onClick={resetForm}> Reset</button>
              </form>
            );
          }}
        </Formik>}
     
    </div>
  );
}
