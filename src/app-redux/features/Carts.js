import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [
      {
        id: 1,
        image: require("../../assets/cart/image-xx99-mark-two-headphones.jpg")
          .default,
        name: "XX99 MK II",
        price: 2999,
        quantity: 1,
      },
      {
        id: 2,
        image: require("../../assets/cart/image-xx59-headphones.jpg").default,
        name: "XX59",
        price: 899,
        quantity: 1,
      },
      {
        id: 3,
        image: require("../../assets/cart/image-yx1-earphones.jpg").default,
        name: "YX1",
        price: 599,
        quantity: 1,
      },
    ],
  },
  reducers: {
    addCart: (state, action) => {
      state.carts = [...state.carts, action.payload];
    },
    incrementQuantity: (state, action) => {
      state.carts[action.payload.id].quantity += action.payload.quantity;
    },
    decrementQuantity: (state, action) => {
      state.carts[action.payload.id].quantity -= action.payload.quantity;
    },
    emptyTheCart: (state) => {
      state.carts.length = 0;
    },
  },
});

export const {
  addCart,
  emptyTheCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
