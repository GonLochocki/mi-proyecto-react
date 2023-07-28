import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { DotLoader } from "react-spinners";
import { Box } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let consulta;

    let coleccionProductos = collection(dataBase, "productos");

    if (!category) {
      consulta = coleccionProductos;
    } else {
      consulta = query(coleccionProductos, where("category", "==", category));
    }

    getDocs(consulta).then((res) => {
      let arregloProductos = res.docs.map((producto) => {
        return { ...producto.data(), id: producto.id };
      });
      setItems(arregloProductos);
    });
  }, [category]);

  if (items.length === 0) {
    return <Box sx={{display: "flex", justifyContent:"center", marginTop:30}}> <DotLoader color="#138BDF" /></Box>;
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;


