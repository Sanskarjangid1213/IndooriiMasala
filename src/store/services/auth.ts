import { rootApiSlice } from "./rootApiSlice";
import { ApiPaths } from "../../constanse/apiPath";

const authApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Login endpoint
    login: builder.mutation({
      query: (credentials) => ({
        url: ApiPaths.login,
        method: "POST",
        body: credentials,
      }),
    }),

    // Signup endpoint
    signup: builder.mutation({
      query: (userData) => ({
        url: ApiPaths.signup, 
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
