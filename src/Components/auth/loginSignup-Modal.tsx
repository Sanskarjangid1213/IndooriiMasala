"use client"
import { useSelector, useDispatch } from "react-redux"
import Login from "./Login"
import Signup from "./SignUp"
import { RootState } from "@/store/store"
import { closeModal } from "@/store/slices/authModalSlice"

const LoginSignupModal = () => {
  const dispatch = useDispatch()
  const { isOpen, mode } = useSelector((state: RootState) => state.authModal)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-md">
     
        <div
          className={`absolute w-full transition-all duration-300 slide-out-to-end-translate-full ${
            mode === "login"
              ? "opacity-100 scale-110 "
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <Login isOpen={true} onClose={() => dispatch(closeModal())} />
        </div>

        <div
          className={`absolute w-full transition-all duration-300 slide-out-to-end-translate-full ${
            mode === "signup"
              ? "opacity-100 scale-110 "
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <Signup isOpen={true} onClose={() => dispatch(closeModal())} />
        </div>
      </div>
    </div>
  )
}

export default LoginSignupModal
