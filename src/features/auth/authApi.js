import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://appointment-manager-node.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    registerPatient: builder.mutation({
      query: (data) => ({
        url: "/auth/register/patient",
        method: "POST",
        body: data,
      }),
    }),
    registerDoctor: builder.mutation({
      query: (data) => ({
        url: "/auth/register/doctor",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterPatientMutation,
  useRegisterDoctorMutation,
} = authApi;
