import { FilmsApiResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Films"],
  endpoints: (builder) => ({
    getFilms: builder.query<FilmsApiResponse, void>({
      query: () => "/films",
      providesTags: ["Films"],
    }),
  }),
});

export const { useGetFilmsQuery } = filmApi;
