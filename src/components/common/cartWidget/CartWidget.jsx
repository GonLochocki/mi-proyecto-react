import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={1} color="error">
        <ShoppingCartIcon color="inherit" />
      </Badge>
    </div>
  );
};

export default CartWidget;
