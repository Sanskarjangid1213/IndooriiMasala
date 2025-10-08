import { rootApiSlice } from "./rootApiSlice";
import { apiPaths } from "../../constanse/apiPath";
interface LoginCredentials {
    email: string;

    token?:string;
}
interface LoginResponse {
  token: string;
  data: {
    id: string;
    email: string;
    name: string;
  };
}
export interface Response<T> {
  message: string;
  data: T;
  status: number;
}

const authApi = rootApiSlice.injectEndpoints({
endpoints: (builder) => ({
   login : builder.mutation<Response<LoginResponse>,LoginCredentials>({
    query: (credentials) => ({
        url: apiPaths.login,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    // Signup endpoint
    signup: builder.mutation({
      query: (userData) => ({
        url: apiPaths.signup, 
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
