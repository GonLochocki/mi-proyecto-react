import ItemList from "./ItemList";
import {productos} from "../../../productsMock"
import { useState } from "react";
import { useEffect } from "react";

const ItemListContainer = () => {

  const [items, setItems] = useState([]) 


{/* El useEffect recibe 2 parámetros, un callback y un arreglo de dependencias. En el bloque de código del callback
 irá todo el codigo que quiera controlar. */}

 useEffect(()=>{
  const tarea = new Promise((resolve, reject) => {
    resolve(productos)
     // reject("salio todo MAL");
   });
 
   tarea
     .then((response) => setItems(response))
     .catch((error) => console.log(error));
 } , [])

 

  return <ItemList items={items}/>;
};

export default ItemListContainer;

