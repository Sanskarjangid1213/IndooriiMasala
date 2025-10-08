import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie';
export interface User { id: string; name: string }

export const rootApiSlice = createApi({
  reducerPath: 'rootApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
    prepareHeaders: (headers) => {  
  const token = Cookies.get('token'); 
 
      if (token) {
        headers.set('X-asscess-token', `Bearer ${token}`);
      }
      return headers
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['User'],
});



