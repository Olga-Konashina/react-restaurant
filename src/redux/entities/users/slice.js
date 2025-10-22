import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
};

export const usersSlice = createSlice({
    name: "users",
      initialState,
  selectors: {
    selectUserIds: (userState) => userState.ids,
    selectUserById: (userState, id) => userState.entities[id],
  },
});

export const {selectUserIds, selectUserById} = usersSlice.selectors; 