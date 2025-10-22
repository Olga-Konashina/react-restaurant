import styles from "../restaurant/restaurant.module.css";
export const Review = ({ text, id }) => {
  if (!text) {
    return null;
  }

  return (
    <li className={styles.listItem} key={id}>
      {text}
    </li>
  );
};
