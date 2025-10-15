import { Counter } from "../counter/counter";
import { DishCounter } from "../dish-counter/dish-counter";

import styles from "../restaurant/restaurant.module.css";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3 className={styles.hStyle}>Menu</h3>
      <ul className={styles.ulStyle}>
        {menu.map((item) => (
          <li className={styles.liStyle} key={item.id}>
            {item.name}
            <DishCounter />
          </li>
        ))}
      </ul>
    </>
  );
};
