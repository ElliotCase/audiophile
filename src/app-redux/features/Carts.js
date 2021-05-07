import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [
      {
        id: "",
      },
    ],
  },
  reducers: {
    addCart: () => {},
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
