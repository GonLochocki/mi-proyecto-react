import Login from "./Login";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { UserContext } from "../../../context/UserContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

const LoginContainer = () => {
  const { agregarUsuario, users } = useContext(UserContext);
  const [usuario, setUsuario] = useState({});

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      dni: "",
      password: "",
    },
    onSubmit: (data) => {
      let coleccion = collection(dataBase, "usuarios");
      let documento = doc(coleccion, data.dni);
      getDoc(documento).then((res) => {
        if (res.exists()) {
          console.log("El usuario existe");
        } else {
          agregarUsuario(data);
        }
      });
      setUsuario(data);
    },

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo obligatorio")
        .min(3, "Debe tener al menos 3 letras.")
        .max(20, "No debe superar las 20 letras."),
      password: Yup.string().required("Campo obligatorio"),
      dni: Yup.string().required("Campo obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <Login
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default LoginContainer;
