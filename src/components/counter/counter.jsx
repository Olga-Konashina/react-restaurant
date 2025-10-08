import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(1);

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{value}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};
