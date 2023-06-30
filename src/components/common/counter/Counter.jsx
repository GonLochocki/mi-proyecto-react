import { Button } from "@mui/material"


const Counter = ({stock, agregarAlCarrito, counter, setCounter}) => {

  return (
    <div>
      <Button variant="contained" disabled={counter <= 1} onClick={()=>setCounter(counter - 1)}>-</Button>
      <h2>{counter}</h2>
      <Button variant="contained" disabled={stock >= counter} onClick={()=> setCounter(counter + 1)} >+</Button>
      <br />
      <Button color="error" variant="contained" onClick={()=>agregarAlCarrito(counter)}>Agregar al Carrito</Button>
    </div>
  )
}

export default Counter