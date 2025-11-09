import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";
import { FULFILLED_STATUS, IDLE_STATUS, PENDING_STATUS, REJECTED_STATUS } from "../../../constants/constants";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE_STATUS }),
  selectors: {
    selectReviewIds: (reviewState) => reviewState.ids,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = PENDING_STATUS;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);

        state.requestStatus = FULFILLED_STATUS;
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = REJECTED_STATUS;
      })
});

const selectReviewsSlice = (state) => state.reviews;

export const {
  selectById: selectReviewById
} = entityAdapter.getSelectors(selectReviewsSlice);

export const { selectReviewIds } = reviewsSlice.selectors;
