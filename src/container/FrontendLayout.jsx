"use client";
import React, { memo } from "react";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

function FrontendLayout({ children }) {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 1000 }} />
      <Header />
      {children}
    </>
  );
}

export default memo(FrontendLayout);
