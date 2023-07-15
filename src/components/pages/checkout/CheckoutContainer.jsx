import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio.")
        .min(6, "Debe contener al menos 6 caracteres")
        .max(15, "Debe contener un máximo de 15 caracteres"),
      email: Yup.string()
        .email("No corresponde a un email válido")
        .required("Este campo es obligatorio."),
      password: Yup.string().required("Este campo es obligatorio.").min(6),
    }),
    validateOnChange: false,
  });

  console.log(errors);

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />

        <Button type="submit" variant="contained" size="small">
          enviar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutContainer;

{
  /*import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const funcionDeLosInputs = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="ingrese su nombre"
          name="name"
          onChange={funcionDeLosInputs}
        />
        <input
          type="text"
          placeholder="ingrese su apellido"
          name="lastName"
          onChange={funcionDeLosInputs}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
 */
}
