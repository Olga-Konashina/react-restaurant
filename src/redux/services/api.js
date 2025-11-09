import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `reviews?restaurantId=${restaurantId}`,
      providesTags: () => [{ type: "reviews", id: "All" }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `review/${restaurantId}`,
        body: review,
        method: "POST",
      }),
      invalidatesTags: () => [{ type: "reviews", id: "All" }],
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `review/${reviewId}`,
        body: review,
        method: "PATCH",
      }),
      invalidatesTags: () => [{ type: "reviews", id: "All" }],
    }),
    getDishes: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getUsers: builder.query({
      query: () => `/users`,
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetDishesQuery,
  useGetDishByIdQuery,
  useGetUsersQuery,
  useUpdateReviewMutation
} = apiSlice;
