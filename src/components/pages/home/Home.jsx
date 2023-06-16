import { useState } from "react";

const Home = ({ nombre }) => {
  const [contador, setContador] = useState(0);
  const [userName, setName] = useState("Liam");

  // const sumar = () => {
  //   setContador(contador + 1);
  // };

  return (
    <div>
      <h1>Hola {nombre}</h1>
      <h2>Hola {userName}</h2>
      <button onClick={() => setName("Anahi")}>Cambiar Nombre</button>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
};

export default Home;

{
  /* El evento necesita de un callback para no ejecutar automaticamente la funcion que nos retorna useState */
}
