import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Components/Slice/ProductSlice";

export const store = configureStore({
  reducer: {
    Products: ProductSlice,
  },
});
