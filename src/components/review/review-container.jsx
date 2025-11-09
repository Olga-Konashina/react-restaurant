import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { Review } from "./review";

export const ReviewContainer = ({ review }) => {
  if (!review) {
    return null;
  }

  const { text, userId } = review;

  return <Review text={text} key={review.id} userId={userId} />;
};
