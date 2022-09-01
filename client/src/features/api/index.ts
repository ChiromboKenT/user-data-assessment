import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "get",
        };
      },
    }),
  }),
});

export const { useGetUserDataQuery } = appApi;
