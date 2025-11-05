import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Dish } from "../dish/dish";
import { useParams } from "react-router";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id";
import { useRequest } from "../../hooks/use-request";
import { PENDING_STATUS, REJECTED_STATUS } from "../../constants/constants";

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  const requestStatus = useRequest(getDishById, dishId);

  if (requestStatus === PENDING_STATUS) {
    return "loading...";
  }

  if (requestStatus === REJECTED_STATUS) {
    return "error";
  }

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return <Dish name={name} price={price} ingredients={ingredients} />;
};
