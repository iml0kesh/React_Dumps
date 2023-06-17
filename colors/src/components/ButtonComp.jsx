import React, { useState } from "react";

const ButtonComp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Incerement</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ButtonComp;
