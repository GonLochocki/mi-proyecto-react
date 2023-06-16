const App = () => {
  let nombre = "Liam";

  const saludar = () => {
    console.log("Hola", nombre);
  };

  return (
    <div>
      <h1>Hola {nombre}</h1>
      <button onClick={saludar}>Saludo</button>
    </div>
  );
};

export default App;
