import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = ({ item }) => {

  
  return (        
        <Card sx={{ width: "100%" }}>
          <CardMedia
            component="img"
            image={item.img}
            alt={item.title}
            style={{ objectFit: "cover", height: 140, width: "100%" }}
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
