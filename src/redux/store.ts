import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./services/filmApi";

export default configureStore({
  reducer: { [filmApi.reducerPath]: filmApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});
