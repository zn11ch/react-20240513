import { useState } from "react";

export const Counter = ({ initialValue = 0, minValue = 0, maxValue = 5 }) => {
  if (initialValue < minValue || initialValue > maxValue) {
    throw new Error("Initial value must be between min and max value");
  }

  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}> + </button>
      <span> {count} </span>
      <button onClick={decrement}> - </button>
    </div>
  );
};
