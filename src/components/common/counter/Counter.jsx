import { Button } from "@mui/material";

const Counter = ({ stock, agregarAlCarrito, counter, setCounter }) => {

  

  return (
    <div style={{display: "flex"}}>
      <Button
        disabled={counter <= 1}
        variant="contained"
        color="primary"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </Button>
      <h2>{counter}</h2>
      <Button
        disabled={counter >= stock}
        variant="contained"
        color="primary"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </Button>
      <br />
      <br />
      <div>
        <Button variant="contained" color="success" onClick={()=>agregarAlCarrito(counter)}>Agregar al Carrito</Button>
      </div>
    </div>
  );
};

export default Counter;
