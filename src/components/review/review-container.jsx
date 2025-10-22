import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { Review } from "./review";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  const { text } = review;

  return <Review text={text} id={id} />;
};
