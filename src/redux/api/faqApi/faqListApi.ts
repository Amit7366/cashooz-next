import { baseApi } from "../baseApi";



export const faqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createFaq: builder.mutation({
            query: (faqInfo) => ({
                url: "/faq/createFaq",
                method: "POST",
                body: faqInfo,
            }),
            invalidatesTags: ["faq"],
        }),
        viewFaq: builder.query({
            query: () => ({
                url: "/faq",
                method: "GET",
            }),
            providesTags: ["faq"],
        }),
        getFaqBySlug: builder.query({
            query: (slug: string) => ({
                url: `/faq/slug/${slug}`,
                method: "GET",
            }),
            providesTags: ["faq"],
        }),
        getFaqByCategoryId: builder.query({
            query: (categoryId: string) => ({
                url: `/faq/category/${categoryId}`,
                method: "GET",
            }),
            providesTags: ["faq"],
        }),
        getSingleFaq: builder.query({
            query: (faqId: string) => ({
                url: `/faq/${faqId}`,
                method: "GET",
            }),
            providesTags: ["faq"],
        }),
        updateFaq: builder.mutation({
            query: ({ id, ...faqInfo }) => ({
                url: `/faq/${id}`,
                method: "PATCH",
                body: faqInfo,
            }),
            invalidatesTags: ["faq"],
        }),
        deleteFaq: builder.mutation({
            query: (faqId: string) => ({
                url: `/faq/${faqId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["faq"],
        }),
        viewFaqCategory: builder.query({
            query: () => ({
                url: "/faqCategory",
                method: "GET",
            }),
            providesTags: ["faqCategory"],
        }),
    }),
});

export const {
    useCreateFaqMutation,
    useViewFaqQuery,
    useGetFaqBySlugQuery,
    useGetFaqByCategoryIdQuery,
    useGetSingleFaqQuery,
    useUpdateFaqMutation,
    useDeleteFaqMutation,
    useViewFaqCategoryQuery
} = faqApi;
