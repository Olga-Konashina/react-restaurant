import { Outlet } from "react-router";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";

export const RestaurantsLayout = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

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
