import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: 'include', 
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState().auth.token;
    const noAuthEndpoints = ['login', 'register', 'forgotPassword', 'resetPassword']; // Endpoints that don't require auth

    // Check if the endpoint requires authentication
    if (token && !noAuthEndpoints.includes(endpoint)) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
