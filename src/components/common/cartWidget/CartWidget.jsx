import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const CartWidget = () => {

  const {cart} = useContext(CartContext)
  

  return (
    <Link to="/cart" style={{color:"white"}}>
      <Badge badgeContent={cart.length} color="error" showZero>
        <ShoppingCartIcon color="inherit" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
