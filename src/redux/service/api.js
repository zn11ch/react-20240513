import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  tagTypes: ["Restaurant", "Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: "dishes",
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat({ type: "Review", id: "All" })
          .concat({ type: "Restaurant", id: restaurantId }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
    }),

    getDishById: builder.query({
      query: (dishId) => ({
        url: `dish/${dishId}`,
      }),
    }),

    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Restaurant", id: restaurantId },
      ],
    }),

    editReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (result, _, { reviewId }) => [
        { type: "Review", id: reviewId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
  useEditReviewMutation,
  useGetDishByIdQuery,
} = apiService;
