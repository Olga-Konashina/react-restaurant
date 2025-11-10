import { Outlet } from "react-router";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantsLayout = () => {
  const { isError, isLoading, data } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <div>
        {data.map((item) => (
          <RestaurantTab key={item.id} restaurant={item} />
        ))}
      </div>
      <Outlet />
    </>
  );
};
