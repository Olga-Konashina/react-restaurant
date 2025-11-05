import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";
import { getDishById } from "./get-dish-by-id";
import { FULFILLED_STATUS, IDLE_STATUS, REJECTED_STATUS } from "../../../constants/constants";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE_STATUS }),
  selectors: {
    selectDishIds: (dishState) => dishState.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = IDLE_STATUS;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);

        state.requestStatus = FULFILLED_STATUS;
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = REJECTED_STATUS;
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }), 
});

const selectDishesSlice = (state) => state.dishes;

export const {
  selectById: selectDishById
} = entityAdapter.getSelectors(selectDishesSlice);

export const { selectDishIds, selectRequestStatus } = dishesSlice.selectors;

