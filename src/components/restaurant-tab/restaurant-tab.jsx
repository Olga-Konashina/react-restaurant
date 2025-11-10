import { useSelector } from "react-redux";
import { Link } from "../link/link";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const RestaurantTab = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { id, name } = restaurant;

  return <Link to={`/restaurants/${id}`}>{name}</Link>;
};
