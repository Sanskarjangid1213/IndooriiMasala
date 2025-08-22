import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AuthMode = "login" | "signup" | null

interface AuthModalState {
  isOpen: boolean
  mode: AuthMode
}

const initialState: AuthModalState = {
  isOpen: false,
  mode: null, // no modal open initially
}

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<AuthMode>) => {
      state.isOpen = true
      state.mode = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false
      state.mode = null
    },
    switchModal: (state, action: PayloadAction<AuthMode>) => {
      state.mode = action.payload
    },
  },
})

export const { openModal, closeModal, switchModal } = authModalSlice.actions
export default authModalSlice.reducer
