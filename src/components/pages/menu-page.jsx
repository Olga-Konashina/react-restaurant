import { useParams } from "react-router";
import { Menu } from "../menu/menu";
import { useSelector } from "react-redux";
import { selectDishIds } from "../../redux/entities/dishes/slice";
import { getDishes } from "../../redux/entities/dishes/get-dishes";
import { useRequest } from "../../hooks/use-request";
import { PENDING_STATUS, REJECTED_STATUS } from "../../constants/constants";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const menu = useSelector((state) => selectDishIds(state, restaurantId));

  const requestStatus = useRequest(getDishes, restaurantId);

  if (requestStatus === PENDING_STATUS) {
    return "loading...";
  }

  if (requestStatus === REJECTED_STATUS) {
    return "error";
  }

  return Boolean(menu.length) && <Menu menu={menu} />;
};
