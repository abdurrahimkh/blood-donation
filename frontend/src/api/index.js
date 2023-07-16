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
    getUsers: build.query({
      query: (page) => `Users/?page=${page}`,
      providesTags: ["Users"],
    }),
    getAllUsers: build.query({
      query: (page) => ({
        url: "/cloths",
        method: "GET",
        params: {
          page,
        },
      }),
      providesTags: ["Users"],
    }),
    getUserById: build.query({
      query: (id) => `/cloths/${id}`,
      providesTags: ["Users"],
    }),
    getUsersByFilter: build.query({
      query: (param) => {
        return {
          url: "/cloths",
          method: "GET",
          params: param,
        };
      },
      providesTags: ["Users"],
    }),
    addUser: build.mutation({
      query: (data) => {
        return {
          url: "/cloths_create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Users"],
    }),
    editUser: build.mutation({
      query: (data) => {
        return {
          url: `cloths/${data.id}/`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["Users"],
    }),
    deleteUser: build.mutation({
      query: (id) => {
        return {
          url: `/cloths/${id}/`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users"],
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

export const { useRegisterMutation, useVerifyEmailMutation, useLoginMutation, useUpdateProfileMutation, useResendEmailMutation, useForgetPasswordMutation, useResetPasswordMutation } = api;
