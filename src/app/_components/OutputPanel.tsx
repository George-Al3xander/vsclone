"use client";

import { ExecuteCodeButton } from "@/app/_components/ExecuteCodeButton";
import { useCodeStore } from "@/store/use-code-store";
import { Button } from "@/ui/components/atoms/Button";
import { ScrollArea } from "@/ui/components/atoms/ScrollArea";
import { RxCross1Icon } from "@/ui/icons";

export const OutputPanel = () => {
    const output = useCodeStore((s) => s.compilationOutput);
    const setOutput = useCodeStore((s) => s.setCompilationOutput);
    const clearOutput = () => setOutput(null);

    return (
        <div
            className={
                "roundedGlass relative z-[1] mt-auto h-[calc(100vh-10rem)] w-full p-4 sm:h-[20vh]"
            }
        >
            <div
                className={
                    "ml-auto flex w-[min-content] justify-end rounded-md bg-primary px-2"
                }
            >
                <Button variant="ghost" onClick={clearOutput} size="icon">
                    <span className="sr-only">Clear output</span>
                    <RxCross1Icon size={20} />
                </Button>
                <ExecuteCodeButton />
            </div>
            <ScrollArea className={"h-[calc(20vh-4rem)] max-w-full p-2"}>
                <p className="flex flex-col break-all">
                    {output
                        ?.split("\n")
                        .map((line) => <span key={"line"}>{line}</span>) ||
                        "Write, Edit and Run your code using online compiler."}
                </p>
            </ScrollArea>
        </div>
    );
};
