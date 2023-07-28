import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Box, Button, TextField } from "@mui/material";
import { dataBase } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import * as Yup from "yup";
import { useFormik } from "formik";

const CheckoutContainer = () => {
  const { cart, precioTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = precioTotal();

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      phone: "",
      email: "",
    },
    onSubmit: (data) => {
      let order = {
        comprador: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      let refCollection = collection(dataBase, "orders");
      addDoc(refCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) => {
        updateDoc(doc(dataBase, "productos", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo obligatorio").max(25),
      email: Yup.string().email().required("Campo obligatorio"),
      phone: Yup.string().required("Campo obligatorio"),
    }),

    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <Box>
          <h2>Su numero de seguimiento es: {orderId}</h2>
        </Box>
      ) : (
        <div>
          <Box
            sx={{ color: "rgb(3, 24, 80)", textAlign: "center", padding: 5 }}
          >
            <h2>ORDEN DE COMPRA</h2>
          </Box>
          <Box
            sx={{
              color: "rgb(3, 24, 80)",
              marginLeft: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2>Ingrese los datos de quien retirará la compra:</h2>
          </Box>
          <Box sx={{ color: "rgb(3, 24, 80)", marginTop: 2 }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                type="text"
                placeholder="Nombre..."
                name="nombre"
                onChange={handleChange}
                error={errors.nombre ? true : false}
                helperText={errors.nombre}
              />
              <TextField
                type="text"
                placeholder="Telefono..."
                name="phone"
                onChange={handleChange}
                error={errors.phone ? true : false}
                helperText={errors.phone}
              />
              <TextField
                type="text"
                placeholder="Correo electrónico..."
                name="email"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
              <Box sx={{ width: "30px" }}>
                <Button variant="contained" type="submit" size="small">
                  Comprar
                </Button>
              </Box>
            </form>
          </Box>
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;

{
  /* 

import { Button, TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

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

*/
}
