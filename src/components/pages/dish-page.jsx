import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Dish } from "../dish/dish";
import { useParams } from "react-router";

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return <Dish name={name} price={price} ingredients={ingredients} />;
};
