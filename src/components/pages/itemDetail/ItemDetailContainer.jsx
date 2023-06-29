import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({
    id: 1,
    name: "telefono",
    price: 220,
    stock: 5,
  });

  const agregarAlCarrito = (cantidad) => {
    let data = {...product, quantity: cantidad,};
    console.log(data);
  };

  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
