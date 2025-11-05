import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";
import { FULFILLED_STATUS, IDLE_STATUS, PENDING_STATUS, REJECTED_STATUS } from "../../../constants/constants";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE_STATUS }),
  selectors: {
    selectUserIds: (userState) => userState.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = PENDING_STATUS;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);

        state.requestStatus = FULFILLED_STATUS;
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = REJECTED_STATUS;
      })
});

const selectUsersSlice = (state) => state.users;

export const {
  selectById: selectUserById
} = entityAdapter.getSelectors(selectUsersSlice);

export const {selectUserIds, selectRequestStatus } = usersSlice.selectors; 