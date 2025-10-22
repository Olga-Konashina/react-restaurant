import { createSlice } from "@reduxjs/toolkit";

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
    selectCartItemsIds: (cartState) => Object.keys(cartState),
    selectCartItemById: (cartState, id) => cartState[id],
  },
});

export const { selectCartItemsIds, selectCartItemById } =
  cartSlice.selectors;

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;