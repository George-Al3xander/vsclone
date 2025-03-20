"use client";

import { useExecuteCode } from "@/app/_hooks/use-execute-code";
import { useMobileTabsActions } from "@/store/mobile-tabs-store";
import { Button } from "@/ui/components/atoms/Button";
import { VscLoadingIcon, VscPlayIcon } from "@/ui/icons";

export const ExecuteCodeButton = () => {
    const { executeCode: execCode, isCompiling } = useExecuteCode();
    const { setTab } = useMobileTabsActions();

    const executeCode = async () => {
        await execCode();
        setTab("output");
    };

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
