import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";


const ItemList = ({ items }) => {
  return (
    
    <div>    
      <Grid container spacing={2} padding={2}>
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
