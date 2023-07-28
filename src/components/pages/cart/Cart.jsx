import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "./Cart.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {
  const { cart, vaciarCarrito, eliminarDelCarrito, precioTotal } =
    useContext(CartContext);
  let precio_total = precioTotal();

  {
    if (cart.length > 0) {
      return (
        <>
          <Box>
            {cart.map((item) => {
              return (
                <div className="cart-detail" key={item.id}>
                  <div className="img-cart-container">
                    <img
                      className="img-cart-detail"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                  </div>
                  <div>
                    <h3 className="cart-item-info">Precio: ${item.price}</h3>
                  </div>
                  <div>
                    <h3 className="cart-item-info">
                      Cantidad: {item.quantity}
                    </h3>
                  </div>

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => eliminarDelCarrito(item.id)}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </div>
              );
            })}
          </Box>

          {cart.length > 0 && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 5,
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={vaciarCarrito}
                >
                  Vaciar Carrito
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <Box sx={{ boxShadow: 10, padding: 2, borderRadius: 2 }}>
                  <h3 className="total">Total: ${precio_total}</h3>
                </Box>
                <Box>
                  <Link to="/checkout">
                    <Button variant="contained" type="submit">
                      Finalizar Compra
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          )}
        </>
      );
    } else {
      return <div className="carrito-vacio">
        <img className="img-empty-cart" src="https://www.100natural.com/delivery100/web/vistas/img/cartempty.png" alt="" />
      </div>;
    }
  }
};

export default Cart;
