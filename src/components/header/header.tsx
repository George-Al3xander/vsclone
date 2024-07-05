"use client";
import React from "react";
import Logo from "@/components/logo";
import { FileManagerDropdown } from "@/components/file/file-manager-menu";
import { cn } from "@/lib/utils";
import { roundedGlassStyle } from "@/constants/data";
import RunCodeBtn from "@/components/run-code-btn";
import MobileMenu from "@/components/mobile menu/mobile-menu";

function Header() {
  return (
    <header
      className={cn(
        "flex h-[4rem] items-center gap-4 px-4 py-2",
        roundedGlassStyle,
      )}
    >
      <Logo />

      <ul className="ml-auto flex items-center">
        <FileManagerDropdown />
        <MobileMenu />
        <RunCodeBtn />
      </ul>
    </header>
  );
}

export default Header;
