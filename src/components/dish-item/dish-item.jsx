import { useSelector } from "react-redux";
import { Link } from "../link/link";
import { selectDishById } from "../../redux/entities/dishes/slice";

export const DishItem = ({ item }) => {
  if (!item) {
    return null;
  }

  const { id, name } = item;

  return (
    <li className="listItem">
      <Link to={`/dish/${id}`}>{name}</Link>
    </li>
  );
};
