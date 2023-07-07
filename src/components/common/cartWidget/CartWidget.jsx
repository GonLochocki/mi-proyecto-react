import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Link} from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to="/cart" style={{color:"white"}}>
      <Badge badgeContent={1} color="error">
        <ShoppingCartIcon color="inherit" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
