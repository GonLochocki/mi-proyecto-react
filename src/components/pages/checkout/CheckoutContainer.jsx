import { Button, TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const CheckoutContainer = () => {
  
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      setDatosUsuario([...datosUsuario, data]);    
      
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

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
            border:"solid 1px black",
            width:"30%",
            padding:"50px",
            margin:"0px auto",
            boxShadow: 10
          }}
        >
          <h2>Registro</h2>
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
        </Box>
      </form>
    </div>
  );
};

export default CheckoutContainer;
