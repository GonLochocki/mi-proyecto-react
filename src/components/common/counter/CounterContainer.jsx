import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, agregarAlCarrito }) => {
  const [counter, setCounter] = useState(1);

  return (
    <Counter
      stock={stock}
      agregarAlCarrito={agregarAlCarrito}
      counter={counter}
      setCounter={setCounter}
    />
  );
};

export default CounterContainer;
