"use client";

import { useExecuteCode } from "@/app/_hooks/use-execute-code";
import { Button } from "@/ui/components/atoms/Button";
import { VscLoadingIcon, VscPlayIcon } from "@/ui/icons";

export const ExecuteCodeButton = () => {
    const { executeCode, isCompiling } = useExecuteCode();

    return (
        <Button
            variant="ghost"
            onClick={executeCode}
            disabled={isCompiling}
            size="icon"
        >
            <span className="sr-only">Execute code</span>
            {isCompiling ? (
                <VscLoadingIcon className="animate-spin" size={20} />
            ) : (
                <VscPlayIcon size={20} />
            )}
        </Button>
    );
};
