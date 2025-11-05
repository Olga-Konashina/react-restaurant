import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurantById } from "./get-restaurant-by-id";
import { FULFILLED_STATUS, IDLE_STATUS, PENDING_STATUS, REJECTED_STATUS } from "../../../constants/constants";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE_STATUS }),
  selectors: {
    selectRestaurantIds: (restaurantState) => restaurantState.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = PENDING_STATUS;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);

        state.requestStatus = FULFILLED_STATUS;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = REJECTED_STATUS;
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

const selectRestaurantsSlice = (state) => state.restaurants;

export const {
  selectById: selectRestaurantById
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const { selectRestaurantIds, selectRequestStatus } =
  restaurantsSlice.selectors;