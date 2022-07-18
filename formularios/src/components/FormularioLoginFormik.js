import React from "react";
// Hacer uso de FORMIK, un gestor de formularios
import { Formik } from "formik";
//  Hacer uso de yup para validación
import * as Yup from "yup";
import "./styles/Formik.css";

const FormularioLoginFormik = () => {
  return (
    <Formik
      // Config Formik
      initialValues={{ email: "", password: "" }} // obligatorio initialValues
      // ******* DECLARAMOS LA FUNCIÓN QUE SE DEBE EJECURAR EN EL ONSIBMIT DEL FORM
      onSubmit={(values, { setSubmitting }) => {
        // Realizaríamos la llamadda a la petición htyp para hacer el login
        // de momento es una simulación
        setTimeout(() => {
          console.log("ENVIANDO...");
          console.table(values); // printo los valores del formulario
          setSubmitting(false);
        }, 5000);
      }}
      // *********** VALIDACIÓN DE CAMPOS A TRAVÉS DE YUP *******
      // Creamos un esquema del aspecto que tendrá el form y sus campos
      // además de las validaciones que se requieren
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("El email no es válido")
          .required("Por favor, indique un email"),
        password: Yup.string()
          .required("La contraseña es obligatoria")
          .min(7, "La contraseña ha de tener 7 caracteres como mínimo"),
        //.matches() para regexP
      })}
    >
      {/* **** PASAMOS PROPS al FORMULARIO QUE VAMOS A PINTAR
      - values: valores del formulario
      - touched: nos dice si un campo ha sido tocado por el usuario o no
      - errors: nos lista los errores del formulario
      - isSubmitting: nos dice si se está ejecutando el submit del formulario
      - handelChange: manejar cambios en los campos del formulario
      - handleBlur: manejar blur de los campos
      - handleSubmit: manejador para ejecutar la dunción onsubmit de Formkik*/}
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleSubmit,
          handleBlur,
          handleChange,
          resetForm
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email"> Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email de usuario"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {/* Mostramos los errores relacionados con el email */}
            {errors.email && touched.email && (
              <div className="input-error">
                {errors.email /* errores que hemos personalizado de yup*/}
              </div>
            )}
            <label htmlFor="password"> Password</label>
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {/* Mostramos los errores relacionados con el password */}
            {errors.password && touched.password && (
              <div className="input-error">
                {errors.password /* errores que hemos personalizado de yup*/}
              </div>
            )}
            <button type="submit" disabled={isSubmitting}>
              Acceder
            </button>
            <button onClick={resetForm}> Reset</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormularioLoginFormik;
