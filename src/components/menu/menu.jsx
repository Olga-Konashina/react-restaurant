import { Counter } from "../counter/counter";
import { DishCounter } from "../counter/dish-counter/dish-counter";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name}
            <DishCounter />
          </li>
        ))}
      </ul>
    </>
  );
};
