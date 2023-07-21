import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authReducer?.activeUser?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  reducerPath: "donation-api",
  tagTypes: ["User"],
  endpoints: (build) => ({
    Register: build.mutation({
      query: (data) => {
        return {
          url: "/user_signup",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["User"],
    }),
    verifyEmail: build.mutation({
      query: (token) => {
        return {
          url: `/verify-email/${token}`,
          method: "POST",
        };
      },
      providesTags: ["User"],
    }),
    resendEmail: build.mutation({
      query: (email) => {
        return {
          url: `/resend-verification/${email}`,
          method: "POST",
        };
      },
      providesTags: ["User"],
    }),
    Login: build.mutation({
      query: (data) => {
        return {
          url: "/user_login",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["User"],
    }),
    forgetPassword: build.mutation({
      query: (data) => {
        return {
          url: "/forget_password",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["User"],
    }),
    resetPassword: build.mutation({
      query: ({ token, data }) => {
        return {
          url: `/reset_password/${token}`,
          method: "POST",
          body: data,
        };
      },
      providesTags: ["User"],
    }),
    updateProfile: build.mutation({
      query: (data) => {
        return {
          url: `/user_update/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["User"],
    }),
    updatePicture: build.mutation({
      query: (data) => {
        return {
          url: "/picture_upload",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["User"],
    }),
    getDonors: build.query({
      query: (param) => {
        return {
          url: "/donors",
          method: "GET",
          params: param,
        };
      },
      providesTags: ["Donors"],
    }),
    getDonorsAll: build.query({
      query: () => {
        return {
          url: "/donors-all",
          method: "GET",
        };
      },
      providesTags: ["Donors"],
    }),
    postRequest: build.mutation({
      query: (data) => {
        return {
          url: "create-request",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["User"],
    }),
    getRequestsAll: build.query({
      query: () => {
        return {
          url: "/get-requests",
          method: "GET",
        };
      },
      providesTags: ["Requests"],
    }),
    postDonation: build.mutation({
      query: (data) => {
        return {
          url: "/submit-donation",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["User"],
    }),
    getDonationAll: build.query({
      query: () => {
        return {
          url: "/get-donations",
          method: "GET",
        };
      },
      providesTags: ["Requests"],
    }),
    getUserById: build.query({
      query: (id) => `/user/${id}`,
      providesTags: ["Donors"],
    }),
    getDonorsByFilter: build.query({
      query: (param) => {
        return {
          url: "/user",
          method: "GET",
          params: param,
        };
      },
      providesTags: ["Donors"],
    }),
    addUser: build.mutation({
      query: (data) => {
        return {
          url: "/user_create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Donors"],
    }),
    editUser: build.mutation({
      query: (data) => {
        return {
          url: `user/${data.id}/`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["Donors"],
    }),
    deleteUser: build.mutation({
      query: (id) => {
        return {
          url: `/user/${id}/`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Donors"],
    }),
    getUserOrders: build.query({
      query: (id) => {
        return {
          url: `/order?user=${id}`,
          method: "GET",
        };
      },
      providesTags: ["Orders"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyEmailMutation,
  useLoginMutation,
  useUpdateProfileMutation,
  useResendEmailMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useGetDonorsQuery,
  useGetDonorsAllQuery,
  usePostRequestMutation,
  useGetRequestsAllQuery,
  usePostDonationMutation,
  useGetDonationAllQuery,
  useUpdatePictureMutation,
} = api;
