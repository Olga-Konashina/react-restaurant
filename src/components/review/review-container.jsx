import { Review } from "./review";

export const ReviewContainer = ({ review }) => {
  if (!review) {
    return null;
  }

  const { id, text, userId, rating } = review;

  return (
    <Review
      text={text}
      key={review.id}
      userId={userId}
      id={id}
      rating={rating}
    />
  );
};
