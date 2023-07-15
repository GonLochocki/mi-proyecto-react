import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "../../../productsMock"
import ItemList from "./ItemList"


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {category} = useParams()

  useEffect(()=>{
    let productosFiltrados = productos.filter((producto)=> producto.category === category)
    let promise = new Promise((resolve,reject)=>{
      resolve(category ? productosFiltrados : productos)
    })

    promise.then((res)=> setItems(res)).catch((err)=> console.log(err))

  }, [category])

  return (
   <ItemList items={items} />
  )
}

export default ItemListContainer
