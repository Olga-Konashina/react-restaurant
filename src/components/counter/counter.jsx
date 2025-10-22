import { Button } from "../button/button";
import styles from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <Button title="+" onClick={increment} className="counterButton" />
      <span className={styles.span}>{value}</span>
      <Button title="-" onClick={decrement} className="counterButton" />
    </div>
  );
};
