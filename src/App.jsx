import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponente from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextComponente>
        <AppRouter />
      </CartContextComponente>
    </BrowserRouter>
  );
};

export default App;
