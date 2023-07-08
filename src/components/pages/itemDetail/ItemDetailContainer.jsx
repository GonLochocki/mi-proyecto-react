import { useEffect, useState } from "react";
import { productos } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  useEffect(() => {
    let promise = new Promise((resolve, reject) => {
      let productSelected = productos.find((producto) => producto.id === +id);
      resolve(productSelected);
    });

    promise.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = { ...product, quantity: cantidad };
    console.log(data);
  };

  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
