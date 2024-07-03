"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { roundedGlassStyle } from "@/constants/data";
import { useRecoilState, useRecoilValue } from "recoil";
import { $output, $outputVisibility } from "@/state/atoms/atoms";
import RunCodeBtn from "@/components/run-code-btn";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { $isVertical } from "@/state/selectors/selectors";
function Output() {
  const [output, setOutput] = useRecoilState($output);
  const open = useRecoilValue($outputVisibility);
  const clearOutput = () => setOutput(undefined);
  const isVertical = useRecoilValue($isVertical);

  if (!open) return null;
  return (
    <div
      className={cn(
        "relative h-[calc(100vh-10rem)] w-full p-4 sm:h-[20vh]",
        roundedGlassStyle,
        {
          "sm:h-full sm:w-1/3": !isVertical,
        },
      )}
    >
      <ul
        className={
          "ml-auto flex w-[min-content] justify-end rounded-md bg-primary px-2"
        }
      >
        <Button
          aria-label={"Clear input button"}
          variant="ghost"
          onClick={clearOutput}
          size="icon"
        >
          <RxCross1 size={20} />
        </Button>
        <RunCodeBtn />
      </ul>
      <ScrollArea
        className={cn("h-[calc(20vh-4rem)] max-w-full p-2", {
          "sm:h-[calc(100vh-13rem)]": !isVertical,
        })}
      >
        <p className="flex flex-col break-all">
          {output
            ? output.split("\n").map((line) => <span key={"line"}>{line}</span>)
            : "Click play button to compile your code "}
        </p>
      </ScrollArea>
    </div>
  );
}

export default Output;
