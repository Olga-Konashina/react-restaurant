import styles from "../restaurant/restaurant.module.css";
import { DishContainer } from "../dish/dish-container";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3 className={styles.hStyle}>Menu</h3>
      <ul className={styles.ulStyle}>
        {menu.map((id) => (
          <DishContainer id={id} key={id} />
        ))}
      </ul>
    </>
  );
};
