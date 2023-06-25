import { useState } from "react";
import Counter from "./Counter";


const CounterContainer = ({ stock, agregarAlCarrito }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <Counter
        stock={stock}
        agregarAlCarrito={agregarAlCarrito}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
};

export default CounterContainer;
