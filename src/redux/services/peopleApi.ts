import { PeopleApiResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const peopleApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["People"],
  endpoints: (builder) => ({
    getCharacters: builder.query<PeopleApiResponse, number>({
      query: (page = 1) => ({
        url: "/people",
        params: { expanded: true, page, limit: 5 },
      }),
      providesTags: ["People"],
    }),
  }),
});

export const { useGetCharactersQuery } = peopleApi;
