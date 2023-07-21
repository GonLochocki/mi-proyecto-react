import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { productos } from "../../../productsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart, obtenerCantidadPorId } = useContext(CartContext);

  let cantidadEnCarrito = obtenerCantidadPorId(id);

  useEffect(() => {
    let productoSeleccionado = productos.find(
      (producto) => producto.id === +id
    );
    let promise = new Promise((resolve, reject) => {
      resolve(productoSeleccionado);
    });

    promise.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = { ...product, quantity: cantidad };
    addToCart(data);
  };

  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} cantidadEnCarrito={cantidadEnCarrito} />
};

export default ItemDetailContainer;

