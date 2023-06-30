import { Button } from "@mui/base";
import { useState } from "react";
import { useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let data = fetch("https://jsonplaceholder.typicode.com/users");

    data
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, []);

  let newUser = {
    name: "Gonzalo",
    username: "Lochocki",
    email: "gonlochocki@gmail.com",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  };

  const createUser = () => {
    let data = fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST", 
        headers: {
            "Authorization": "fsdfafdfs",
            "Content-Type": "Aplication/Json"
        },
        body: JSON.stringify(newUser)
    })

    data.then(res => console.log(res)).catch(error => console.log(error))

  }



  return <div>
    <h1>Fetching de Datos</h1>
    <button onClick={createUser}>Crear Usuario</button>
  </div>;
};

export default FetchData;
