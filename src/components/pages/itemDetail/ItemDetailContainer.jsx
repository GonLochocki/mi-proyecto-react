import { useEffect, useState } from "react";
import { productos } from "../../../productsMock";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  let id = 2

  useEffect(()=>{
    let promise = new Promise((resolve, reject)=>{
      let productSelected = productos.find((producto)=> producto.id === id)
      resolve(productSelected)
    })

    promise.then((res)=> setProduct(res)).catch((err)=> console.log(err))

  }, [id])

  const agregarAlCarrito = (cantidad) => {
    let data = {...product, quantity: cantidad}
  }

  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito}/>
}

export default ItemDetailContainer
