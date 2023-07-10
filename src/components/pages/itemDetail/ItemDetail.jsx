import { Box } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: { xs: "lightgrey", sm: "orange", md: "gray" },
      }}
    >
      <Box sx={{ width: {xs:"100%", sm:"80%"} , padding: "10px", margin: {sm:"0px auto"} }}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5);",
            borderRadius: "10px",
            gap: 1
          }}
        >
          <h2 style={{ textAlign: "center", fontSize:"20px" }}>{product.title}</h2>
          <h2 style={{ textAlign: "center", fontSize:"20px" }}>Precio: ${product.price}</h2>
          <h2 style={{ textAlign: "center", fontSize:"20px" }}>
            Cantidad disponible: {product.stock}
          </h2>
        </Box>
        <Box sx={{ padding: 2, textAlign: "justify" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            facilis voluptas delectus repudiandae similique omnis, odio minima
            vel. Nulla pariatur voluptatibus ea, tenetur impedit tempore
            voluptatum quisquam doloremque inventore nemo.
          </p>
        </Box>
        <div style={{ marginTop: "10px" }}>
          <CounterContainer
            stock={product.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        </div>
      </Box>
    </Box>

    // <div className="body-detail">
    //   <Grid container>
    //     <Grid item xs={12} md={6}>
    //       <Box textAlign="center" sx={{ width: "50vw", height: "auto" }}>
    //         <img
    //           src={product.img}
    //           alt={product.title}
    //           className="image-detail"
    //         />
    //       </Box>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Box>
    //         <Box
    //           sx={{
    //             display: "flex",

    //             alignItems: "center",
    //           }}
    //         >
    //           <h2>{product.title}</h2>
    //           <h2>Stock: {product.stock}</h2>
    //           <h2>Precio: ${product.price}</h2>
    //         </Box>
    //         <Box>
    //           <CounterContainer
    //             stock={product.stock}
    //             agregarAlCarrito={agregarAlCarrito}
    //           />
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default ItemDetail;
