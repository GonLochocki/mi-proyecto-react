import Login from "./Login";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { UserContext } from "../../../context/UserContext";
import { getDocs, query, where, collection } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

const LoginContainer = () => {
  const { agregarUsuario, users } = useContext(UserContext);

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    let coleccion = collection(dataBase, "usuarios");
    let documento = query(coleccion, "dni", "==", usuario.document);

    agregarUsuario(usuario);
  }, [usuario]);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      document: "",
      password: "",
    },
    onSubmit: (data) => {
      setUsuario(data);
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Campo obligatorio")
        .min(3, "Debe tener al menos 3 letras.")
        .max(20, "No debe superar las 20 letras."),
      password: Yup.string().required("Campo obligatorio"),
      document: Yup.string().required("Campo obligatorio"),
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
