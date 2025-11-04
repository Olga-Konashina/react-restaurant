import { useContext } from "react";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { useParams } from "react-router";
import { UserContext } from "../user-provider";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const ReviewPage = () => {
  const { user } = useContext(UserContext);
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  const { reviews } = restaurant;

  return (
    <>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      {user && <ReviewForm />}
    </>
  );
};
