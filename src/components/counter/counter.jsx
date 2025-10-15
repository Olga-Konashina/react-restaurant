export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <button type="button" onClick={increment}>
        +
      </button>
      <span>{value}</span>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};
