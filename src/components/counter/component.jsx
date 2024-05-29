export const Counter = ({ value, increment, decrement }= {}) => {

  return (
    <div>
      <button onClick={increment}> + </button>
      <span> {value} </span>
      <button onClick={decrement}> - </button>
    </div>
  );
};
