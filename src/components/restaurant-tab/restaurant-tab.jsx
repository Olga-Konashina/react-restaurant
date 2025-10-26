import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Button } from "../button/button";

export const RestaurantTab = ({ id, onClick, disabled }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return <Button title={name} onClick={onClick} disabled={disabled} />;
};
