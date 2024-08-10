import { apiSlice } from './apiSlice';

const USERS_URL = `${import.meta.env.VITE_API_BASE_URL}/user`;

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
        // Explicitly set `noAuth` to true for endpoints that don't need authentication
        noAuth: true,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
        // Explicitly set `noAuth` to true for endpoints that don't need authentication
        noAuth: true,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PATCH',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/forgotPassword`,
        method: 'POST',
        body: data,
        // Explicitly set `noAuth` to true for endpoints that don't need authentication
        noAuth: true,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/resetPassword`,
        method: 'POST',
        body: data,
        // Explicitly set `noAuth` to true for endpoints that don't need authentication
        noAuth: true,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = userApiSlice;
