import { apiPaths } from "constanse/apiPath";
import { rootApiSlice } from "./rootApiSlice";
import { Response } from "./auth";
export interface User {
  // MongoDB ObjectId
  firstName: string;      
  lastName: string;      
  email: string;         
  createdAt: Date;        
  updatedAt: Date;      
    
}

export const authApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<Response<User>, void>({
      query: () => apiPaths.User, // token automatically sent in headers
    }),
  }),
});

export const { useGetProfileQuery } = authApi;