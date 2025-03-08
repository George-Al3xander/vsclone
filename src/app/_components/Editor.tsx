"use client";

import { useEditorProps } from "@/app/_hooks/use-editor-props";
import { cn } from "@/utils/cn";
import EditorMonaco from "@monaco-editor/react";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof EditorMonaco>;

export const Editor: FC<Props> = (props) => {
    return (
        <EditorMonaco
            {...useEditorProps()}
            {...props}
            className={cn(
                "roundedGlass h-[calc(100vh-12rem)] min-h-full w-full p-2 sm:h-[calc(100vh-9.5rem-20vh)]",
                props?.className,
            )}
            theme="vs-dark"
        />
    );
};
