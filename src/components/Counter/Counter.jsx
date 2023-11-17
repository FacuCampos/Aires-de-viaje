import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [contador, setContador] = useState(1);
  const increment = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const decrement = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (

    <div className="container-counter">
        <h2>Aca va un contador:</h2>
      <button onClick={decrement}>-</button>
      <p>{contador}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
