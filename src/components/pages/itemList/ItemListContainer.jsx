import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let referencia_a_coleccion = collection(dataBase, productos);
    getDocs(referencia_a_coleccion).then((res) => {
      let arregloProductos = res.docs.map((producto) => {
        return { ...producto.data(), id: producto.id };
      });
      console.log(arregloProductos)
    });
  }, [category]);

  return <h1>Productos</h1>

  // if (items.length === 0) {
  //   return <h1>Cargando...</h1>;
  // }

  // return <ItemList items={items} />;
};

export default ItemListContainer;

// useEffect anterior:

{
  /* useEffect(() => {
    let productosFiltrados = productos.filter(
      (producto) => producto.category === category
    );
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(category ? productosFiltrados : productos);
      }, 1000);
    });

    promise.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [category]); */
}
