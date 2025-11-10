import { useParams } from "react-router";
import { Menu } from "../menu/menu";
import { useGetDishesQuery } from "../../redux/services/api";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { isError, isLoading, data } = useGetDishesQuery(restaurantId);

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }

  return Boolean(data.length) && <Menu menu={data} />;
};
