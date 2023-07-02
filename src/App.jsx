import Navbar from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";




const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <br />
      <ItemDetailContainer />
      
    </div>
  );
};

export default App;
