import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addItemToCart: (cartState, { payload }) => {
      cartState[payload] = (cartState[payload] || 0) + 1;
    },
    removeItemFromCart: (cartState, { payload }) => {
      if (!cartState[payload]) {
        return cartState;
      }

      cartState[payload] = cartState[payload] - 1;

      if (cartState[payload] <= 0) {
        delete cartState[payload];
      }
    },
  },
  selectors: {
    selectCartItemById: (cartState, id) => cartState[id],
  },
});

const selectCartSlice = (state) => state[cartSlice.name];
export const selectCartItemsIds = createSelector(
  [selectCartSlice],
  (cartState) => {
    return Object.keys(cartState);
  }
);

export const { selectCartItemById } =
  cartSlice.selectors;

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;