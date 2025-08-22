
import { configureStore } from '@reduxjs/toolkit'
import { rootApiSlice } from './services/rootApiSlice'
import authModalReducer from "./slices/authModalSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      [rootApiSlice.reducerPath]: rootApiSlice.reducer, // <-- remove if not using RTK Query

    authModal: authModalReducer,
    },
    middleware: (getDefault) => getDefault().concat(rootApiSlice.middleware), // <-- remove if not using RTK Query
    devTools: process.env.NODE_ENV !== 'production',
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
