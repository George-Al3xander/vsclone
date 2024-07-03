"use client";
import React from "react";
import useGetCurrLang from "@/hooks/useGetCurrLang";
import {
  LANGUAGE_FILE_EXTENSIONS,
  LANGUAGES_REACT_ICONS,
} from "@/constants/consts";

function FileBadge() {
  const currLang = useGetCurrLang();
  const ext = LANGUAGE_FILE_EXTENSIONS[currLang];
  const Icon = LANGUAGES_REACT_ICONS[currLang];
  return (
    <div
      className={
        "ml-10 hidden items-center gap-2 rounded-md bg-accent p-2 text-sm md:flex"
      }
    >
      <Icon size={15} />
      main{ext}
    </div>
  );
}

export default FileBadge;
