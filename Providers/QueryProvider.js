"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

export default function QueryProvider({ children }) {

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <SessionProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
