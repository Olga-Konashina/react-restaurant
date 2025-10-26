import { useSelector } from "react-redux";
import { Restaurant } from "./restaurant";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return <Restaurant name={name} menu={menu} reviews={reviews} key={id} />;
};
