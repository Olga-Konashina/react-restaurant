import { useSelector } from "react-redux";
import { Link } from "../link/link";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return <Link to={`/restaurants/${id}`}>{name}</Link>;
};
