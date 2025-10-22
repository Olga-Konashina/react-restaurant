import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Dish } from "./dish";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return <Dish name={name} id={id} />;
};
