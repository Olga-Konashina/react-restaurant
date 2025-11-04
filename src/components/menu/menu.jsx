import { DishItem } from "../dish-item/dish-item";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3 className="h">Menu</h3>
      <ul className="list">
        {menu.map((id) => (
          <DishItem id={id} key={id} />
        ))}
      </ul>
    </>
  );
};
