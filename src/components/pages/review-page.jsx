import { use } from "react";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { useParams } from "react-router";
import { AuthContext } from "../auth-provider";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";

export const ReviewPage = () => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;
  const { restaurantId } = useParams();

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

  return (
    <>
      {Boolean(data.length) && <Reviews reviews={data} />}
      {isAuthorized && <ReviewForm id={restaurantId} userId={auth.userId} />}
    </>
  );
};
