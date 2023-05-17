import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["blogApi"],
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => "/blogs",
      providesTags: ["blogApi"],
    }),
    singleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blogApi"],
    }),
    createBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["blogApi"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["blogApi"],
    }),
    editBlog: builder.mutation({
      query: (newData) => ({
        url: `/blogs/${newData.id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["blogApi"],
    }),
  }),
});

export const {
  useGetBlogQuery,
  useSingleBlogQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useEditBlogMutation
} = blogApi;
