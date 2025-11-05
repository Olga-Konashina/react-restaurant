import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (id, { rejectWithValue, dispatch, getState }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("no data");
    }

    return result;
  },
);
