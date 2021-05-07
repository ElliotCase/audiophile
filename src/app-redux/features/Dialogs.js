import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    isMenuOpen: false,
    isCartOpen: false,
  },
  reducers: {
    openOrCloseMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    openOrCloseCart: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const { openOrCloseMenu, openOrCloseCart } = dialogSlice.actions;

export default dialogSlice.reducer;
