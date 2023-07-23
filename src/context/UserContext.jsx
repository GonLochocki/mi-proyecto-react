import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { dataBase } from "../firebaseConfig";

export const UserContext = createContext();

const UserContextComponent = ({ children }) => {
  const [users, setUsers] = useState([]);

  const agregarUsuario = async (usuario) => {
    let existe = users.some((user) => user.dni === usuario.dni);
    if (existe) {
      console.log("El usuario existe en el estado");
    } else {
      setUsers([...users, usuario]);
      console.log("Usuario agregado existosamente al estado");
    }

    try {
      let coleccion = collection(dataBase, "usuarios");
      await addDoc(coleccion, usuario);
      console.log("Usuario agregado exitosamente a Firebase");
    } catch (err) {
      console.log(err);
    }
  };

  let data = {
    agregarUsuario,
    users,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextComponent;
