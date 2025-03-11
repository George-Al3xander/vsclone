"use client";

import { useEditorProps } from "@/app/_hooks/use-editor-props";
import { IconTextBlock } from "@/ui/components/molecules/IconTextBlock";
import { AiFillCodeIcon } from "@/ui/icons";
import { cn } from "@/utils/cn";
import EditorMonaco from "@monaco-editor/react";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof EditorMonaco>;

const baseStyles =
    "roundedGlass h-[calc(100vh-12rem)] w-full  sm:h-[calc(100vh-9.5rem-20vh)]";

export const Editor: FC<Props> = (props) => {
    return (
        <EditorMonaco
            {...useEditorProps()}
            {...props}
            className={cn(baseStyles, "min-h-full p-2", props?.className)}
            loading={
                <IconTextBlock
                    title="Preparing the code-editing area. It will be available shortly."
                    subtitle="Please wait..."
                    icon={AiFillCodeIcon}
                    containerProps={{ className: baseStyles }}
                />
            }
            theme="vs-dark"
        />
    );
};
