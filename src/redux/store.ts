import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./services/filmApi";
import { peopleApi } from "./services/peopleApi";
import { starshipApi } from "./services/starshipApi";

export default configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
    [starshipApi.reducerPath]: starshipApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      filmApi.middleware,
      peopleApi.middleware,
      starshipApi.middleware
    ),
});
