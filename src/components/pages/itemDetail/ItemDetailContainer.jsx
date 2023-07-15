import { useContext, useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { productos } from "../../../productsMock"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  let {id} = useParams()
  const {addToCart} = useContext(CartContext)
  
  useEffect(()=>{
    let productoSeleccionado = productos.find((producto)=> producto.id === +id)
    let promise = new Promise((resolve, reject)=> {
      resolve(productoSeleccionado)
    })

    promise.then((res)=> setProduct(res)).catch((err)=> console.log(err))

  }, [id]) 

  const agregarAlCarrito = (cantidad) => {
    let data = {...product, quantity: cantidad}
    addToCart(data)
  }

  return (
    <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />
  )
}

export default ItemDetailContainer



























{/*import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../../productsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let promise = new Promise((resolve, reject) => {
      let productoSeleccionado = productos.find((item) => item.id === +id);
      resolve(productoSeleccionado);
    });

    promise.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = { ...product, quantity: cantidad };
    addToCart(data);
  };

  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;

 */}