import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>I am displaying COUNTER button </h3>
      <h2>Counter: {count}</h2>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
};

export default Counter;
