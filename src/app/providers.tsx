"use client";

import LoginSignupModal from "Components/auth/loginSignup-Modal";
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import { Provider } from "react-redux";
import { makeStore } from "store/store";
import { toast, ToastContainer } from "react-toastify"
import { useEffect } from "react";

const store = makeStore();

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
    const message = localStorage.getItem("showLoginToast");
    if (message) {
      toast.success(message);
      localStorage.removeItem("showLoginToast"); 
    }
     const logoutMessage = localStorage.getItem("showLogoutToast");
    if (logoutMessage) {
      toast.success(logoutMessage);
      localStorage.removeItem("showLogoutToast");
    }
  }, []);
  return (
    <Provider store={store}>
      <Navbar />
      <LoginSignupModal />
      {children}
      <Footer/>
          <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </Provider>
  );
}
