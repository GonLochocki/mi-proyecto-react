import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = ({ item }) => {

  
  return (        
        <Card sx={{ Width: 345 }}>
          <CardMedia
            sx={{ height: 140, Width: "100%" }}
            image={item.img}
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver Detalle</Button>
          </CardActions>
        </Card>  
        
        
    
  );
};

export default ProductCard;
