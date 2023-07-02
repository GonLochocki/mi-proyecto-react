import { Button } from "@mui/material";

const Counter = ({ stock, agregarAlCarrito, counter, setCounter }) => {
  return (
    <div>
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
      <br />
      <Button
        color="error"
        variant="contained"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default Counter;
