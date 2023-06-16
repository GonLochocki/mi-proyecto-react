import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/itemList/ItemListContainer";

const App = () => {
  let nombre = "Liam";

  const saludo = "Hola como estas";

  return (
    <div>
      <Navbar />
      <Home nombre={nombre} />
      <ItemListContainer saludo={saludo} />
    </div>
  );
};

export default App;
