import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { MenuTab } from "../menu-tab/menu-tab";
import { ReviewTab } from "../review-tab/review-tab";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import { useRequest } from "../../hooks/use-request";
import { PENDING_STATUS, REJECTED_STATUS } from "../../constants/constants";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const requestStatus = useRequest(getRestaurantById, restaurantId);

  if (requestStatus === PENDING_STATUS) {
    return "loading...";
  }

  if (requestStatus === REJECTED_STATUS) {
    return "error";
  }

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <>
      <div>
        <h2 className="h">{name}</h2>
        <MenuTab key={`${restaurantId}-menu`} id={restaurantId} />
        <ReviewTab key={`${restaurantId}-review`} id={restaurantId} />
      </div>
      <Outlet />
    </>
  );
};
