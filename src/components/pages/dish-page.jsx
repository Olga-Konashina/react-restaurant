import { Dish } from "../dish/dish";
import { useParams } from "react-router";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishPage = () => {
  const { dishId } = useParams();
  const { isError, isLoading, data } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }

  const { name, price, ingredients } = data;

  return <Dish name={name} price={price} ingredients={ingredients} />;
};
