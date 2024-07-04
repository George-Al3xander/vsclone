"use client";
import React from "react";
import Header from "@/components/header/header";
import LanguageSelectionBar from "@/components/language-selection-bar";

function Templated({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Header />
      <div className="editor-grid">
        <LanguageSelectionBar />
        {children}
      </div>
    </div>
  );
}

export default Templated;
