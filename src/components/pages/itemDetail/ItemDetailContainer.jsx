import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import ItemDetail from "./ItemDetail";
import { dataBase } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart, obtenerCantidadPorId } = useContext(CartContext);

  let cantidadEnCarrito = obtenerCantidadPorId(id);

  

  useEffect(() => {
    let referencia_a_coleccion = collection(dataBase, "productos");
    let referencia_a_documento = doc(referencia_a_coleccion, id);
    getDoc(referencia_a_documento).then((res) =>
      setProduct({ ...res.data(), id: res.id })
    );
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = { ...product, quantity: cantidad };
    addToCart(data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado con exito!',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <ItemDetail
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      cantidadEnCarrito={cantidadEnCarrito}
    />
  );
};

export default ItemDetailContainer;
