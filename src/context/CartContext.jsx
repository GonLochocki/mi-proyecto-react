import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponente = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((item) => item.id === product.id);

    if (existe) {
      let nuevoArreglo = cart.map((item) => {
        if (product.id === item.id) {
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
      setCart(nuevoArreglo);
    } else {
      setCart([...cart, product]);
    }
  };

  const eliminarDelCarrito = (id) => {
    let nuevoArreglo = cart.filter((item) => item.id !== id);
    setCart(nuevoArreglo);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const cantidadTotalProductos = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    return total;
  };

  const precioTotal = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  const obtenerCantidadPorId = (id) => {
    let producto = cart.find((item) => item.id === +id);
    return producto?.quantity;
  };

  let data = {
    cart,
    addToCart,
    eliminarDelCarrito,
    vaciarCarrito,
    cantidadTotalProductos,
    precioTotal,
    obtenerCantidadPorId,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponente;
