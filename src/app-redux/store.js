import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/Dialogs";
import cartReducer from "./features/Carts";
import productReducer from "./features/Products";

export default configureStore({
  reducer: {
    dialogs: dialogReducer,
    carts: cartReducer,
    products: productReducer,
  },
});
