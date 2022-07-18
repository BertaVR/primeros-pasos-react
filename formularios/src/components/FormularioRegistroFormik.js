// Formulario de registro que tiene que tener:
/**
 * ? Tipo función
 * ? Con FORMIK y YUP
 * ? Nombre -> max 15 caracteres, requerido (asterisco que lo muestre en el label)
 * ? email -> email, obligatorio (asterisco)
 * ? País -> obligatorio, opción entre España, Portugal y Francia
 * ? contraseña -> contraseña, tener letras, una mayúscula y al menos un número y un símbolo de puntuación y requerida
 * ? Repetir contraseña -> debe ser igual que la contraseña original
 * ? --- AL HACER SUBMIT DEBE MOSTRARSE EL FORMULARIO, MENOS LA CONTRASEÑA
 * ? También se debe poder resetear campos
 */

import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import "./styles/Formik.css";

const FormularioRegistroFormik = () => {
  return (
    <Formik
      initialValues={{
        nombre: "",
        email: "",
        país: "",
        contraseña: "",
        repetirContraseña: "",
      }}
      validationSchema={Yup.object().shape({
        nombre: Yup.string()
          .max(15, "El nombre debe tener como máximo 15 caracteres")
          .required("Por favor, indique su nombre"),
        email: Yup.string("Por favor, indique un email de contacto")
          .email("El formato de email no es correcto")
          .required("Por favor, indique un email de contacto"),
          país: Yup.string().required('Por favor, seleccione un país'),
        contraseña: Yup.string()
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
            "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un símbolo, y debe tener entre 8 y 16 caracteres"
          )
          .required("Por favor, indique una contraseña"),

        repetirContraseña: Yup.string()
          .oneOf(
            [Yup.ref("contraseña"), null],
            "Las contraseñas deben coincidir"
          )
          .required("Por favor, repita la contraseña"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log("ENVIANDO...");
        const {  contraseña, repetirContraseña, ...valoresAMostrar } = values;

        console.table(valoresAMostrar); // printo los valores del formulario
        setSubmitting(false);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleSubmit,
          handleBlur,
          handleChange,
          resetForm,
          dirty,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre"> Nombre:</label>
            <input
              name="nombre"
              type="text"
              placeholder="Escriba su nombre"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.nombre && touched.nombre && "error"}
            />
            {errors.nombre && touched.nombre && (
              <div className="input-error">{errors.nombre}</div>
            )}
            <label htmlFor="email"> Email:</label>
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
            <label htmlFor="contraseña"> Contraseña:</label>
            <input
              name="contraseña"
              type="password"
              placeholder="Contraseña"
              value={values.contraseña}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.contraseña && touched.contraseña && "error"}
            />
            {/* Mostramos los errores relacionados con el password */}
            {errors.contraseña && touched.contraseña && (
              <div className="input-error">
                {errors.contraseña /* errores que hemos personalizado de yup*/}
              </div>
            )}
            <label htmlFor="repetirContraseña"> Repita la contraseña:</label>
            <input
              name="repetirContraseña"
              type="password"
              placeholder="Repita la contraseña"
              value={values.repetirContraseña}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.repetirContraseña && touched.repetirContraseña && "error"
              }
            />
            {errors.repetirContraseña && touched.repetirContraseña && (
              <div className="input-error">{errors.repetirContraseña}</div>
            )}

            <label htmlFor="país"> País:</label>
            <select
              name="país"
              placeholder="País"
              value={values.país}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.país && touched.v && "error"}
            >
              <option value="">Seleccione un país</option>
              <option value="españa">España</option>
              <option value="francia">Francia</option>
              <option value="Portugal">Portigal</option>
            </select>
            {errors.país && touched.país && (
              <div className="input-error">{errors.país}</div>
            )}
            <button
              type="submit"
              disabled={
                !dirty || isSubmitting || Object.keys(errors).length > 0
              }
            >
              Crear cuenta
            </button>
            <button onClick={resetForm}> Reset</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormularioRegistroFormik;
