import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/slice";
import { reviewsSlice } from "./entities/reviews/slice";
import { usersSlice } from "./entities/users/slice";
import { dishesSlice } from "./entities/dishes/slice";
import { cartSlice } from "./entities/cart/slice";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
