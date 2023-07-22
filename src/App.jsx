import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponente from "./context/CartContext";
import UserContextComponent from "./context/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserContextComponent>
      <CartContextComponente>
        <AppRouter />
      </CartContextComponente>
      </UserContextComponent>
    </BrowserRouter>
  );
};

export default App;
