import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
});

const selectUsersSlice = (state) => state.users;