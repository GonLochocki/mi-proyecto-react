import { Box, Grid } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";


const ItemDetail = ({ product, agregarAlCarrito }) => {

  
  return (
    <div className="body-detail">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box textAlign="center" sx={{ width: "50vw", height: "auto" }}>
            <img
              src={product.img}
              alt={product.title}
              className="image-detail"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box
              sx={{
                display: "flex",                
                
                alignItems: "center",
              }}
            >
              <h2>{product.title}</h2>
              
              <h2>Precio: ${product.price}</h2>
            </Box>
            <Box>
              <CounterContainer
                stock={product.stock}
                agregarAlCarrito={agregarAlCarrito}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetail;
