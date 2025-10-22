import styles from "../restaurant/restaurant.module.css";
import { ReviewContainer } from "../review/review-container";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3 className={styles.h}>Reviews</h3>
      <ul className={styles.list}>
        {reviews.map((id) => (
          <ReviewContainer id={id} key={id} />
        ))}
      </ul>
    </>
  );
};
