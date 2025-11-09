import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState()
});

const selectReviewsSlice = (state) => state.reviews;

export const {
  selectById: selectReviewById
} = entityAdapter.getSelectors(selectReviewsSlice);
