import { useState, useEffect } from "react";
import { productos } from "../../../productsMock";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const {category} = useParams()
  

  useEffect(() => {

    let productosFiltrados = productos.filter((producto) => producto.category === category)

    let promise = new Promise((resolve, reject) => {
      resolve(category ? productosFiltrados : productos);
    });

    promise.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [category]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
