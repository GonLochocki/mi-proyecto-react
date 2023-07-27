import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () => {
  const { cart, vaciarCarrito, eliminarDelCarrito, precioTotal } =
    useContext(CartContext);
  let precio_total = precioTotal();

  return (
    <>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <h3>Nombre: {item.title}</h3>
              <h3>Precio: {item.price}</h3>
              <h3>Cantidad: {item.quantity}</h3>

              <button onClick={() => eliminarDelCarrito(item.id)}>
                Eliminar
              </button>
            </div>
          );
        })}
        {cart.length > 0 && (
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        )}

        <h3>Total: {precio_total}</h3>
      </div>
      <Link to="/checkout">
        <Button variant="contained" type="submit">
          Terminar Compra
        </Button>
      </Link>
    </>
  );
};

export default Cart;
