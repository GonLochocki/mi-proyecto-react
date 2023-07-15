import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, limpiarCarrito, eliminarDelCarrito } = useContext(CartContext);
  

  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h3>Nombre: {item.title}</h3>
            <h3>Precio: {item.price}</h3>
            <h3>Cantidad: {item.quantity}</h3>
            <button onClick={()=> eliminarDelCarrito(item.id)}>Eliminar</button>
          </div>
        );
      })}
      <button onClick={limpiarCarrito}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
