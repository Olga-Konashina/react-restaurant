import { use } from "react";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { useParams } from "react-router";
import { AuthContext } from "../auth-provider";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
} from "../../redux/services/api";
import { INITIAL_FORM } from "../../constants/constants";

export const ReviewPage = () => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;
  const { restaurantId } = useParams();
  const [addReview] = useAddReviewMutation();

  const { isError, isLoading, data } =
    useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }

  const handleFormSubmit = (text, rating) => {
    addReview({
      restaurantId,
      review: { text, rating, userId: auth.userId },
    });
  };

  return (
    <>
      {Boolean(data.length) && <Reviews reviews={data} />}
      {isAuthorized && (
        <ReviewForm
          initialState={INITIAL_FORM}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </>
  );
};
