export const Counter = ({ value, minValue = 0, maxValue = 5, onChange }) => {
  if (value < minValue || value > maxValue) {
    throw new Error("Initial value must be between min and max value");
  }

  const increment = () => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > minValue) {
      onChange(value - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}> + </button>
      <span> {value} </span>
      <button onClick={decrement}> - </button>
    </div>
  );
};
