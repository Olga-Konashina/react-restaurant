import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
});

const selectDishesSlice = (state) => state.dishes;

export const {
  selectById: selectDishById
} = entityAdapter.getSelectors(selectDishesSlice);


