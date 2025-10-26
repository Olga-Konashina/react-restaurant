import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
};

export const restaurantsSlice = createSlice({
    name: "restaurants",
      initialState,
  selectors: {
    selectRestaurantIds: (restaurantState) => restaurantState.ids,
    selectRestaurantById: (restaurantState, id) => restaurantState.entities[id],
  },
});

export const {selectRestaurantById, selectRestaurantIds} = restaurantsSlice.selectors; 