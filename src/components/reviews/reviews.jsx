import { ReviewContainer } from "../review/review-container";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3 className="h">Reviews</h3>
      <ul className="listItem">
        {reviews.map((item) => (
          <ReviewContainer review={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
