"use client";

import { cn } from "@/utils/cn";
import EditorMonaco from "@monaco-editor/react";
import { ComponentProps, FC, HTMLAttributes } from "react";
import { useEditorProps } from "../_hooks/use-editor-props";

type Props = {
    monacoEditorProps?: ComponentProps<typeof EditorMonaco>;
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
};

export const Editor: FC<Props> = ({ monacoEditorProps, wrapperProps }) => {
    return (
        <div
            {...wrapperProps}
            className={cn("roundedGlass p-2", wrapperProps?.className)}
        >
            <EditorMonaco
                {...useEditorProps(monacoEditorProps)}
                {...monacoEditorProps}
            />
        </div>
    );
};
