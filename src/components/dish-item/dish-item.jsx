import { useSelector } from "react-redux";
import { Link } from "../link/link";
import { selectDishById } from "../../redux/entities/dishes/slice";

export const DishItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return (
    <li className="listItem">
      <Link to={`/dish/${id}`}>{name}</Link>
    </li>
  );
};
