"use client";

import { useCodeStore } from "@/store/use-code-store";
import { Button } from "@/ui/components/atoms/Button";
import { ScrollArea } from "@/ui/components/atoms/ScrollArea";
import { RxCross1Icon } from "@/ui/icons";
import { cn } from "@/utils/cn";
import { ComponentProps, FC, HTMLAttributes } from "react";
import { ExecuteCodeButton } from "./ExecuteCodeButton";

type Props = {
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
    scrollAreaProps?: ComponentProps<typeof ScrollArea>;
};

export const OutputPanel: FC<Props> = ({ wrapperProps, scrollAreaProps }) => {
    const output = useCodeStore((s) => s.compilationOutput);
    const clearCompilationOutput = useCodeStore(
        (s) => s.clearCompilationOutput,
    );

    const lines: string[] | null = output?.split("\n").filter(Boolean) || null;

    return (
        <div
            {...wrapperProps}
            className={cn(
                "roundedGlass relative z-[1] box-border flex h-[calc(100vh-10rem)] w-full flex-col gap-4 p-4 sm:h-full sm:flex-row-reverse",
                wrapperProps?.className,
            )}
        >
            <div className="ml-auto h-[max-content] w-[max-content] rounded-md bg-primary px-2">
                <Button
                    variant="ghost"
                    onClick={clearCompilationOutput}
                    size="icon"
                >
                    <span className="sr-only">Clear output</span>
                    <RxCross1Icon size={20} />
                </Button>
                <ExecuteCodeButton />
            </div>
            <ScrollArea
                {...scrollAreaProps}
                className={cn(
                    "my-auto flex-1 sm:h-[calc(20vh-4rem)]",
                    scrollAreaProps?.className,
                )}
            >
                <p className="flex flex-col break-all">
                    {lines?.map((l, i) => (
                        <span key={"output-line-" + i + l}>{l}</span>
                    )) ||
                        "Write, Edit and Run your code using online compiler."}
                </p>
            </ScrollArea>
        </div>
    );
};
