import { useParams } from "react-router";
import { Menu } from "../menu/menu";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  const { menu } = restaurant;

  return Boolean(menu.length) && <Menu menu={menu} />;
};
