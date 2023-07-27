import { Button } from "@mui/material";
import { productos } from "../../../productsMock";

import { dataBase } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Dashboard = () => {
  const cargarBaseDeDatos = () => {
    let coleccion = collection(dataBase, "productos");
    productos.forEach((producto) => {
      addDoc(coleccion, producto); // en donde quiero guardar / lo que quiero guardar
    });
  };

  return (
    <div>
      <h1>DASHBOARD</h1>
      <Button variant="contained" onClick={cargarBaseDeDatos}>
        Rellenar base de datos
      </Button>
    </div>
  );
};

export default Dashboard;
