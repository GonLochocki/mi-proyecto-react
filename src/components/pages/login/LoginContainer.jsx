import Login from "./Login";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { UserContext } from "../../../context/UserContext";
import { getDoc, doc, collection } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";


const LoginContainer = () => {
  const { agregarUsuario, users } = useContext(UserContext);
  const [usuario, setUsuario] = useState({});


  useEffect(() => {   

    agregarUsuario(usuario);
  }, [usuario]);

  console.log(users)

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      dni: "",
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
