"use client";
import React, { memo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function FrontendLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default memo(FrontendLayout);
