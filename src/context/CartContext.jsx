import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponente = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((item) => item.id === product.id);

    if (existe) {
      let newArray = cart.map(elemento => {
        if(product.id === elemento.id){
          return {...elemento, quantity: elemento.quantity + product.quantity}

        }else {
          return elemento
        }
      })
      setCart(newArray);

    } else {
      setCart([...cart, product]);
    }
  };

  const limpiarCarrito = () => {
    setCart([]);
  };

  const eliminarDelCarrito = (id) => {
    let nuevoArreglo = cart.filter((product) => product.id !== id);
    setCart(nuevoArreglo);
  };

  let data = {
    cart,
    addToCart,
    limpiarCarrito,
    eliminarDelCarrito,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponente;
