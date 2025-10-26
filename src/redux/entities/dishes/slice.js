import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selectDishIds: (dishState) => dishState.ids,
    selectDishById: (dishState, id) => dishState.entities[id],
  },
});

export const { selectDishIds, selectDishById } = dishesSlice.selectors;
