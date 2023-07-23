import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { dataBase } from "../firebaseConfig";

export const UserContext = createContext();

const UserContextComponent = ({ children }) => {
  const [users, setUsers] = useState([]);

  const agregarUsuario = async (usuario) => {
    let existeEnEstado = users.some((user) => user.dni === usuario.dni);
    let existeEnDb = false;

    let coleccion = collection(dataBase, "usuarios");
    let documento = doc(coleccion, usuario.dni);
    let resultado = await getDoc(documento);

    if (resultado.exists()) {
      existeEnDb = true;
      console.log("El usuario ya existe en la base de datos");
    }

    if (existeEnEstado || existeEnDb) {
      console.log("El usuario ya existe");
    } else {
      setUsers([...users, usuario]);

      try {
        const usuariosRef = collection(dataBase, "usuarios");
        await addDoc(usuariosRef, usuario);
        console.log("Usuario agregado existosamente");
      } catch (err) {
        console.log(err);
      }
    }
  };

  let data = {
    agregarUsuario,
    users,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextComponent;
