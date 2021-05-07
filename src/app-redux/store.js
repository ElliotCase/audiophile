import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/Dialogs";
import cartReducer from "./features/Carts";

export default configureStore({
  reducer: {
    dialogs: dialogReducer,
    carts: cartReducer,
  },
});
