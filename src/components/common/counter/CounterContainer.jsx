import { useState } from "react";
import Counter from "./Counter"; 

const CounterContainer = ({stock, agregarAlCarrito, cantidadEnCarrito=1}) => {

  const [counter, setCounter] = useState(cantidadEnCarrito)
 

  return <Counter stock={stock} agregarAlCarrito={agregarAlCarrito} counter={counter} setCounter={setCounter} />
}

export default CounterContainer




