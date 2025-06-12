import { ApiWithPaginationResponse, StarshipProperties } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
interface QueryParams {
  page?: number;
  name?: string;
  model?: string;
}

export const starshipApi = createApi({
  reducerPath: "starshipApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Starship"],
  endpoints: (builder) => ({
    getShips: builder.query<
      ApiWithPaginationResponse<StarshipProperties>,
      QueryParams
    >({
      query: ({ page = 1, name, model }) => ({
        url: "/starships",
        params: { expanded: true, page, limit: 4, name, model },
      }),
      providesTags: ["Starship"],
    }),
  }),
});

export const { useGetShipsQuery } = starshipApi;
