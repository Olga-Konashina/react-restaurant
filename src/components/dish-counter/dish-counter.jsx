import { useCallback, useState } from "react";
import { Counter } from "../counter/counter";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItemById,
} from "../../redux/entities/cart/slice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export const DishCounter = () => {
  const { dishId } = useParams();
  const dispatch = useDispatch();
  const value = useSelector((state) => selectCartItemById(state, dishId)) || 0;

  const increment = useCallback(
    () => dispatch(addItemToCart(dishId)),
    [dispatch, dishId]
  );

  const decrement = useCallback(
    () => dispatch(removeItemFromCart(dishId)),
    [dispatch, dishId]
  );

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
