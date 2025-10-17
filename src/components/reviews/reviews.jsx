import styles from "../restaurant/restaurant.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3 className={styles.h}>Reviews</h3>
      <ul className={styles.list}>
        {reviews.map((item) => (
          <li className={styles.listItem} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};
