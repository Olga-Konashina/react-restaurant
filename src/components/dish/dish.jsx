import { use } from "react";
import { DishCounter } from "../dish-counter/dish-counter";
import { AuthContext } from "../auth-provider";

export const Dish = ({ name, price, ingredients }) => {
  const { auth } = use(AuthContext);

  const { isAuthorized } = auth;

  if (!name) {
    return null;
  }

  return (
    <>
      <h2 className="h">{name}</h2>
      <h3 className="h">{`Price: ${price} $`}</h3>
      <ul className="list">
        {ingredients?.map((item) => (
          <li className="listItem" key={item}>
            {item}
          </li>
        ))}
      </ul>
      {isAuthorized && <DishCounter />}
    </>
  );
};
