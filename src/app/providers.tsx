"use client";

import { Provider } from "react-redux";
import { makeStore } from "@/store/store";
import Navbar from "@/Components/Navbar";
import LoginSignupModal from "@/Components/auth/loginSignup-Modal";

const store = makeStore();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Navbar />
      <LoginSignupModal />
      {children}
    </Provider>
  );
}
