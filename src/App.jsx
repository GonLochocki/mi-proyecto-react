import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Navbar from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
          <Route path="*" element={<h1>ERROR 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
