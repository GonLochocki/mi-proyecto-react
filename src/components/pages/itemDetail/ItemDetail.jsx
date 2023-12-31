import { Box, Grid } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";


const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <Box
      sx={{
        width: "100%",      
        
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          padding: "10px",
          margin: { sm: "0px auto" },
          
        }}
      >
        <Box>
          <img
            src={product.img}
            alt={product.title}
            style={{
              width: "100%",
              margin: "auto",
              objectFit: "contain",
              padding: 10,
            }}
          />
        </Box>
        {/* <Grid container spacing={1}>
          <Grid item xs={12} sm={4} padding={1}>
            <h2 style={{ textAlign: "center", fontSize: "20px" }}>
              {product.title}
            </h2>
          </Grid>
          <Grid item xs={12} sm={4} padding={1}>
            <h2 style={{ textAlign: "center", fontSize: "20px" }}>
              Precio: ${product.price}
            </h2>
          </Grid>
          <Grid item xs={12} sm={4} padding={1}>
            <h2 style={{ textAlign: "center", fontSize: "20px" }}>
              Cantidad disponible: {product.stock}
            </h2>
          </Grid>
        </Grid> */}
        <Box sx={{ padding: 2, textAlign: "justify" }}>
          <p>
            La {product.title} es una guitarra sit amet, consectetur adipisicing elit. Quasi
            facilis voluptas delectus repudiandae similique omnis, odio minima
            vel. Nulla pariatur voluptatibus ea, tenetur impedit tempore
            voluptatum quisquam doloremque inventore nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, similique? Dolor, dolore ab aliquid neque fuga debitis odio sit dolores vero asperiores itaque? Aliquam, suscipit molestiae? Perspiciatis quia asperiores dolor.
          </p>
        </Box>
        <Box>
          <CounterContainer
            stock={product.stock}
            agregarAlCarrito={agregarAlCarrito}
            cantidadEnCarrito={cantidadEnCarrito}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetail;
