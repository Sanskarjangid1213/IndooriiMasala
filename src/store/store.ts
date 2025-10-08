
import { configureStore } from '@reduxjs/toolkit'
import { rootApiSlice } from './services/rootApiSlice'
import authModalReducer from "./slices/authModalSlice"
import authReducer from "./slices/authSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
       auth: authReducer,
      [rootApiSlice.reducerPath]: rootApiSlice.reducer, // <-- remove if not using RTK Query

    authModal: authModalReducer,
    },
    middleware: (getDefault) => getDefault().concat(rootApiSlice.middleware), 
    devTools: process.env.NODE_ENV !== 'production',
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
