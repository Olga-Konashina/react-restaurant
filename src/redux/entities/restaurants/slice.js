import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

const selectRestaurantsSlice = (state) => state.restaurants;

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantsIds,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  reducers: {
    addRestaurantReview: (state, { payload }) => {
      const { restaurantId, reviewId } = payload;

      const { selectById } = entityAdapter.getSelectors();
      const { reviews } = selectById(state, restaurantId) || {};

      entityAdapter.updateOne(state, {
        id: restaurantId,
        changes: { reviews: [...reviews, reviewId] },
      });
    },
  },
});

export const { addRestaurantReview } = restaurantsSlice.actions;