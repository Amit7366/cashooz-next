import { baseApi } from "../baseApi";



export const faqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      
        viewFaq: builder.query({
            query: () => ({
                url: "/faq",
                method: "GET",
            }),
            providesTags: ["faq"],
        })
    }),
});

export const {
    useViewFaqQuery,
} = faqApi;
