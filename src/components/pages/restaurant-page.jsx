import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { MenuTab } from "../menu-tab/menu-tab";
import { ReviewTab } from "../review-tab/review-tab";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

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
