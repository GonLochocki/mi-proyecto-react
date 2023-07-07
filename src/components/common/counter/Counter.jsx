import { Box, Button } from "@mui/material";
import "./Counter.css";

const Counter = ({ stock, agregarAlCarrito, counter, setCounter }) => {
  return (
    <div className="contador">
      <Box sx={{display:"flex"}}>
        <Button
          disabled={counter <= 1}
          variant="contained"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </Button>
        <h2>{counter}</h2>
        <Button
          disabled={counter >= stock}
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
      </Box>
     
      <Box>
        <Button
          color="warning"
          variant="contained"
          onClick={() => agregarAlCarrito(counter)}
        >
          Agregar al Carrito
        </Button>
      </Box>
    </div>
  );
};

export default Counter;
