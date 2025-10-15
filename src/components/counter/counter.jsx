import styles from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <button className={styles.buttonStyle} type="button" onClick={increment}>
        +
      </button>
      <span className={styles.spanStyle}>{value}</span>
      <button className={styles.buttonStyle} type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};
