import { Outlet, useParams } from "react-router";
import { MenuTab } from "../menu-tab/menu-tab";
import { ReviewTab } from "../review-tab/review-tab";
import { useGetRestaurantByIdQuery } from "../../redux/services/api";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const { isError, isLoading, data } = useGetRestaurantByIdQuery(restaurantId);

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }

  const { name } = data;

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
