import React from "react";
import { cn } from "@/lib/utils";
import { VscLoading } from "react-icons/vsc";
import { AiFillCode } from "react-icons/ai";
//Preparing the code-editing area. It will be available shortly.
function LoadingMessage({
  outputVisibility,
  isVertical,
}: {
  outputVisibility: boolean;
  isVertical: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-[calc(100vh-12rem)] flex-col items-center justify-center text-center",
        {
          "sm:h-[calc(100vh-9rem)]": !outputVisibility || !isVertical,
        },
      )}
    >
      <AiFillCode size={150} />
      <p className={"text-lg font-semibold sm:text-xl"}>
        Preparing the code-editing area. It will be available shortly.
      </p>
      <h4 className="opacity-60 sm:text-lg">Please wait</h4>
      {/*<VscLoading className="animate-spin" size={20} />*/}
    </div>
  );
}

export default LoadingMessage;
