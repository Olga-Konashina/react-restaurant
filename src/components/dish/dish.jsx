import { useContext } from "react";
import { DishCounter } from "../dish-counter/dish-counter";
import styles from "../restaurant/restaurant.module.css";
import { UserContext } from "../user-provider";

export const Dish = ({ name, id }) => {
  const { user } = useContext(UserContext);

  if (!name) {
    return null;
  }

  return (
    <li className={styles.liStyle} key={id}>
      {name}
      {user && <DishCounter id={id} />}
    </li>
  );
};
