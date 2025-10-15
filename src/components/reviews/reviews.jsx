import styles from "../restaurant/restaurant.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3 className={styles.hStyle}>Reviews</h3>
      <ul className={styles.ulStyle}>
        {reviews.map((item) => (
          <li className={styles.liStyle} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};
