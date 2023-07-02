import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import ItemListStyle from "./ItemListStyle.css";
const ItemList = ({ items }) => {
  return (
    <div className="itemList-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",          
          textAlign: "center",
          fontSize: "20px",
          
        }}
      >
        <h2 className="titulo">Guitarras</h2>
      </Box>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;
