import React from "react";
import { Button } from "@/components/ui/button";
import { VscLoading, VscPlay } from "react-icons/vsc";
import { useRecoilValue } from "recoil";
import { $isLoading } from "@/state/atoms/atoms";
import useExecuteCode from "@/hooks/use-execute-code";
function RunCodeBtn() {
  const { runCode } = useExecuteCode();
  const isLoading = useRecoilValue($isLoading);
  return (
    <Button
      aria-label="Run code button"
      variant="ghost"
      onClick={runCode}
      disabled={isLoading}
      size="icon"
    >
      {isLoading ? (
        <VscLoading className="animate-spin" size={20} />
      ) : (
        <VscPlay size={20} />
      )}
    </Button>
  );
}

export default RunCodeBtn;
