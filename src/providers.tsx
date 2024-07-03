"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <Toaster />
      {children}
    </RecoilRoot>
  );
}

export default Providers;
