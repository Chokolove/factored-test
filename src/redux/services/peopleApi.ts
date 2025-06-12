import { ApiWithPaginationResponse, PersonProperties } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
interface QueryParams {
  page?: number;
  name?: string;
}

export const peopleApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["People"],
  endpoints: (builder) => ({
    getCharacters: builder.query<
      ApiWithPaginationResponse<PersonProperties>,
      QueryParams
    >({
      query: ({ page = 1, name }) => ({
        url: "/people",
        params: { expanded: true, page, limit: 5, name },
      }),
      providesTags: ["People"],
    }),
  }),
});

export const { useGetCharactersQuery } = peopleApi;
