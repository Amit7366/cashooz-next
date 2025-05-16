// baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cashooz-server.vercel.app/api/v1", // ✅ Must be correct
  }),
  tagTypes: ["faq", "faqCategory"],
  endpoints: () => ({}),
});

