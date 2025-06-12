import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./services/filmApi";
import { peopleApi } from "./services/peopleApi";

export default configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware, peopleApi.middleware),
});
