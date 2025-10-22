import { useContext } from "react";
import { DishCounter } from "../dish-counter/dish-counter";

import styles from "../restaurant/restaurant.module.css";
import { UserContext } from "../user-provider";

export const Menu = ({ menu }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h3 className={styles.hStyle}>Menu</h3>
      <ul className={styles.ulStyle}>
        {menu.map((item) => (
          <li className={styles.liStyle} key={item.id}>
            {item.name}
            {user && <DishCounter />}
          </li>
        ))}
      </ul>
    </>
  );
};
