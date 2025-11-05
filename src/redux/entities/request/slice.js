import { createSlice } from "@reduxjs/toolkit";
import { FULFILLED_STATUS, PENDING_STATUS, REJECTED_STATUS } from "../../../constants/constants";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectStatus: (state, id) => state[id],
    selectIsLoading: (state, id) => state[id] === PENDING_STATUS
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = PENDING_STATUS;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = FULFILLED_STATUS;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = REJECTED_STATUS;
        }
      ),
});

export const { selectStatus, selectIsLoading } = requestSlice.selectors;
