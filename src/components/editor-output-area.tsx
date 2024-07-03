"use client";
import React from "react";
import EditorWindow from "@/components/editor-window";
import Output from "@/components/output";
import { useRecoilValue } from "recoil";
import { $outputPosition } from "@/state/atoms/atoms";
import { cn } from "@/lib/utils";
import { TOutputPosition } from "@/types/types";
import MobileMainTabs from "@/components/mobile-main-tabs";

function EditorOutputArea() {
  const currPosition = useRecoilValue($outputPosition);
  const position = (ps: TOutputPosition) => currPosition === ps;
  return (
    <>
      <main
        className={cn("hidden w-full flex-col gap-4 sm:flex", {
          "flex-col": position("bottom"),
          "flex-col-reverse": position("top"),
          "flex-row": position("right"),
          "flex-row-reverse": position("left"),
        })}
      >
        <EditorWindow />
        <Output />
      </main>
      <MobileMainTabs />
    </>
  );
}

export default EditorOutputArea;
