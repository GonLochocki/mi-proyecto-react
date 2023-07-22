import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextComponent = ({ children }) => {
  const [users, setUsers] = useState([]);

  const agregarUsuario = (usuario) => {
    let existe = users.some(
      (elemento) => elemento.document === usuario.document 
    );
    if (existe) {
      console.log("El usuario ya existe");
    } else {
      setUsers([...users, usuario]);
    }
  };

  let data = {
    agregarUsuario,
    users,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextComponent;
