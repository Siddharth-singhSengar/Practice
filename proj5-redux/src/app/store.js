import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/Counterslice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});