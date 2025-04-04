"use client";

import { useCompilingOutput } from "@/store/code-store";
import { ScrollArea } from "@/ui/components/atoms/ScrollArea";
import { cn } from "@/utils/cn";
import { ComponentProps, FC, HTMLAttributes } from "react";
import { ClearOutputButton } from "./ClearOutputButton";
import { ExecuteCodeButton } from "./ExecuteCodeButton";

type Props = {
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
    scrollAreaProps?: ComponentProps<typeof ScrollArea>;
};

export const OutputPanel: FC<Props> = ({ wrapperProps, scrollAreaProps }) => {
    const output = useCompilingOutput();

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
                <ClearOutputButton />
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
