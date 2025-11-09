import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "./slice";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue, dispatch, getState }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
  condition: (_, { getState }) => {
    return selectRestaurantIds(getState())?.length === 0;
  },
  }
);
