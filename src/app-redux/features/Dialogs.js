import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    openOrCloseMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { openOrCloseMenu } = dialogSlice.actions;

export default dialogSlice.reducer;
