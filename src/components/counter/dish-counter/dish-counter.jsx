import { useState } from "react";
import { Counter } from "../counter";

export const DishCounter = () => {
  const [value, setValue] = useState(1);

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    setValue(value + 1);
  };

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
