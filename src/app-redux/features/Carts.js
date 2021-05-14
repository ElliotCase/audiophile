import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [
      // {
      //   id: 10,
      //   image: require("../../assets/cart/image-xx99-mark-two-headphones.jpg")
      //     .default,
      //   name: "XX99 MK II",
      //   price: 2999,
      //   quantity: 1,
      // },
      // {
      //   id: 12,
      //   image: require("../../assets/cart/image-xx59-headphones.jpg").default,
      //   name: "XX59",
      //   price: 899,
      //   quantity: 1,
      // },
      // {
      //   id: 13,
      //   image: require("../../assets/cart/image-yx1-earphones.jpg").default,
      //   name: "YX1",
      //   price: 599,
      //   quantity: 1,
      // },
    ],
  },
  reducers: {
    addOrUpdateCart: (state, action) => {
      // [action.payload].forEach((updatedObj) => {
      //   const indexInCart = state.carts
      //     .map((cartId) => cartId.id)
      //     .indexOf(updatedObj.id);
      //   if (indexInCart) state.carts.splice(indexInCart, 1, updatedObj);
      //   else state.carts = [...state.carts, action.payload];
      // });
      const index = state.carts.findIndex((e) => e.id === action.payload.id);
      if (index === -1) {
        state.carts.push(action.payload);
      } else {
        state.carts[index] = action.payload;
      }
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
  addOrUpdateCart,
  emptyTheCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
