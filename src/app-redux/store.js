import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/Dialogs";

export default configureStore({
  reducer: {
    dialogs: userReducer,
  },
});
