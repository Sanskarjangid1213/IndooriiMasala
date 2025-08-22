// /lib/redux/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface User { id: string; name: string }

export const rootApiSlice = createApi({
  reducerPath: 'rootApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
    prepareHeaders: (headers) => {
 
      return headers
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['User'],
});



