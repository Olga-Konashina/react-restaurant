import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantsPage = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};
