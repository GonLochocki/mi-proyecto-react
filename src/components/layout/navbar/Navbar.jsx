import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="contenedor_nav">
      <h4>LOGO</h4>
      <ul className="menu_nav">
        <li>Guitarras</li>
        <li>Multiefectos</li>
        <li>Pedales</li>
        <li>Home Studio</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
