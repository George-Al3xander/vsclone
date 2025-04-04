"use client";

import {
    useIsOutputHidden,
    useOutputPosition,
} from "@/store/output-position-desktop-store";
import { cn } from "@/utils/cn";
import { Editor } from "./Editor";
import { OutputPanel } from "./OutputPanel";

export const EditingAreaDesktop = () => {
    const outputPosition = useOutputPosition();
    const isOutputHidden = useIsOutputHidden();
    const isHorizontal = Boolean(
        outputPosition == "right" || outputPosition == "left",
    );

    return (
        <div
            className={cn(
                "hidden h-full w-full flex-col gap-4 sm:flex sm:h-[calc(100vh-8rem)]",
                {
                    "flex-col": outputPosition === "bottom",
                    "flex-col-reverse": outputPosition === "top",
                    "flex-row": outputPosition === "right",
                    "flex-row-reverse": outputPosition === "left",
                },
            )}
        >
            <Editor
                monacoEditorProps={{
                    className: cn(
                        "box-border max-h-full sm:h-[calc(100vh-9.5rem-20vh)]",
                        {
                            "sm:h-[calc(100vh-9rem)]":
                                isOutputHidden || isHorizontal,
                        },
                    ),
                }}
                wrapperProps={{
                    className: cn({
                        "sm:w-[70%]": isHorizontal && !isOutputHidden,
                        "sm:w-[100%]": isOutputHidden,
                    }),
                }}
            />
            <OutputPanel
                wrapperProps={{
                    className: cn({
                        "sm:hidden": isOutputHidden,
                        "sm:w-1/3 sm:flex-col": isHorizontal,
                        "sm:h-[20vh]": !isHorizontal,
                    }),
                }}
            />
        </div>
    );
};
