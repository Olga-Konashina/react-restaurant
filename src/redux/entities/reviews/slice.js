import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewIds: (reviewState) => reviewState.ids,
    selectReviewById: (reviewState, id) => reviewState.entities[id],
  },
});

export const { selectReviewIds, selectReviewById } = reviewsSlice.selectors;
