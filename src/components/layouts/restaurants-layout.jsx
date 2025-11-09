import { Outlet } from "react-router";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRequestStatus,
  selectRestaurantIds,
} from "../../redux/entities/restaurants/slice";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useEffect } from "react";
import { PENDING_STATUS, REJECTED_STATUS } from "../../constants/constants";

export const RestaurantsLayout = () => {
  const dispatch = useDispatch();
  const requestStatus = useSelector(selectRequestStatus);
  const restaurantIds = useSelector(selectRestaurantIds);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (requestStatus === PENDING_STATUS) {
    return "loading...";
  }

  if (requestStatus === REJECTED_STATUS) {
    return "some error";
  }

  return (
    <>
      <div>
        {restaurantIds.map((id) => (
          <RestaurantTab key={id} id={id} />
        ))}
      </div>
      <Outlet />
    </>
  );
};
