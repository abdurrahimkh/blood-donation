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
  tagTypes: ["User", "Donation", "Donors", "Request"],
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
      providesTags: ["User"],
    }),
    getDonorsAll: build.query({
      query: () => {
        return {
          url: "/donors-all",
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
    postRequest: build.mutation({
      query: (data) => {
        return {
          url: "create-request",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["Request"],
    }),
    getRequestsAll: build.query({
      query: () => {
        return {
          url: "/get-requests",
          method: "GET",
        };
      },
      providesTags: ["Request"],
    }),
    postDonation: build.mutation({
      query: (data) => {
        return {
          url: "/submit-donation",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["Donation"],
    }),
    getDonationAll: build.query({
      query: () => {
        return {
          url: "/get-donations",
          method: "GET",
        };
      },
      providesTags: ["Donation"],
    }),
    getDonationByUser: build.query({
      query: (id) => `/get-donation-by-user/${id}`,
      providesTags: ["Donors"],
    }),
    postMessage: build.mutation({
      query: (data) => {
        return {
          url: "/post-message",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Messages"],
    }),
    getMessagesAll: build.query({
      query: () => {
        return {
          url: "/get-messages",
          method: "GET",
        };
      },
      providesTags: ["Messages"],
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
  useGetDonationByUserQuery,
  useGetMessagesAllQuery,
  usePostMessageMutation,
} = api;
