import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";


const ProductCard = ({ item }) => {
  return (
    <div>
      
        <Card sx={{ Width: "100%" }}>
          <CardMedia
            sx={{ height: 140, Width: "100%" }}
            image={item.img}
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Descripción</Button>
          </CardActions>
        </Card>
      
    </div>
  );
};

export default ProductCard;
