import { useCallback, useState } from "react";
import { Counter } from "../counter/counter";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItemById,
} from "../../redux/entities/cart/slice";
import { useDispatch, useSelector } from "react-redux";

export const DishCounter = ({ id }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => selectCartItemById(state, id)) || 0;

  const increment = useCallback(
    () => dispatch(addItemToCart(id)),
    [dispatch, id]
  );

  const decrement = useCallback(
    () => dispatch(removeItemFromCart(id)),
    [dispatch, id]
  );

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
