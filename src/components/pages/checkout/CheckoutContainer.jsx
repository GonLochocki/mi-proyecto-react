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
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const { cart, precioTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

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
      setTimeout(() => {
        navigate("/");
      }, 3000);
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
        <Box sx={{ color: "rgb(3, 24, 80)", marginLeft: 2, marginTop: 10 }}>
          <h2>Su número de seguimiento es: {orderId}</h2>
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
