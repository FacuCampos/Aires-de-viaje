import { useEffect, useState } from "react";
import "./Counter.css";

const Counter = ({stock, initial}) => {
  const [contador, setContador] = useState(initial);

  useEffect(()=>{
    document.title=`contador:  ${contador}`
    if (contador >= 5){
      document.getElementById('btn').style.color='red';
      
    }

  }, [contador])

  const increment = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrement = () => {
    if (contador > initial ) {
      setContador(contador - 1);
    }
  };
 const addToCart = ()=>{
  console.log(`Agregado ${contador} boletos`);
 }
  return (

    <div className="container-counter">
        <h2>Aca va un contador:</h2>
      <button onClick={decrement}>-</button>
      <h3>{contador}</h3>
      <button onClick={increment}>+</button>
      <button onClick={addToCart} id="btn"> Add </button>
    </div>
  );
};

export default Counter;
