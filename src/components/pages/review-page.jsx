import { useContext, useEffect } from "react";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { useParams } from "react-router";
import { UserContext } from "../user-provider";
import { useDispatch, useSelector } from "react-redux";
import { selectReviewIds } from "../../redux/entities/reviews/slice";
import { getReviews } from "../../redux/entities/reviews/get-reviews";
import { useRequest } from "../../hooks/use-request";
import { PENDING_STATUS, REJECTED_STATUS } from "../../constants/constants";
import { getUsers } from "../../redux/entities/users/get-users";
import { selectRequestStatus } from "../../redux/entities/users/slice";

export const ReviewPage = () => {
  const { user } = useContext(UserContext);
  const { restaurantId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const userRequestStatus = useSelector(selectRequestStatus);

  const reviews = useSelector((state) => selectReviewIds(state, restaurantId));

  const requestStatus = useRequest(getReviews, restaurantId);

  if (
    requestStatus === PENDING_STATUS ||
    userRequestStatus === PENDING_STATUS
  ) {
    return "loading...";
  }

  if (
    requestStatus === REJECTED_STATUS ||
    userRequestStatus === REJECTED_STATUS
  ) {
    return "error";
  }

  return (
    <>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      {user && <ReviewForm />}
    </>
  );
};
